/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AuthenticationError, ForbiddenError } from 'apollo-server-micro';
import models from '../../models';

// Get random avatar for landlord
const getAvatar = () => {
  const randomNumber = Math.floor(Math.random() * 2000 + 1);
  return `https://avatars.dicebear.com/api/big-smile/${randomNumber}.svg`;
};

const resolvers = {
  Mutation: {
    // CRUD mutations

    // Create Property
    createProperty: async (
      _,
      { name, address, postcode, capacity, category, image },
      { models, landlord }
    ) => {
      const newProperty = {
        name: name,
        address: address,
        postcode: postcode,
        capacity: capacity,
        category: category,
        image: image,
        landlord: new mongoose.Types.ObjectId(landlord.id),
        rooms: [], // empty array for rooms
      };

      const propertyToSave = await models.Property.create(newProperty);
      return propertyToSave;
    },

    // Update Property
    updateProperty: async (
      _,
      { id, name, address, postcode, capacity, category, image },
      { models, landlord }
    ) => {
      if (!landlord) {
        throw new AuthenticationError(`You must be signed in to delete a property`);
      }

      // find the property
      const property = await models.Property.findById(id);

      // if the property landlord id and currently logged in landlord don't match, throw a forbidden error
      if (property && String(property.landlord) !== landlord.id) {
        throw new ForbiddenError(`You don't have permissions to delete the note`);
      }

      const updatedProperty = await models.Property.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            name,
            address,
            postcode,
            capacity,
            category,
            image,
          },
        },
        { new: true }
      );

      return updatedProperty;
    },

    // Delete Property
    deleteProperty: async (_, { id }, { models, landlord }) => {
      if (!landlord) {
        throw new AuthenticationError(`You must be signed in to delete a property`);
      }
      // find the property
      const property = await models.Property.findById(id);

      // if the property landlord id and currently logged in landlord don't match, throw a forbidden error
      if (property && String(property.landlord) !== landlord.id) {
        throw new ForbiddenError(`You don't have permissions to delete the note`);
      }
      try {
        // if everything checks out, remove the note
        await property.remove();
        return true;
      } catch (error) {
        return false;
      }
    },

    // Authentication
    signUpLandlord: async (_, { firstName, lastName, email, password, role = 'landlord' }) => {
      // normalize email address
      email = email.trim().toLowerCase();
      // hash the password
      const hashed = await bcrypt.hash(password, 10);

      let returnedLandlord;

      try {
        const landlord = await models.Landlord.create({
          firstName,
          lastName,
          email,
          avatar: getAvatar(),
          password: hashed,
          role,
        });

        returnedLandlord = {
          id: landlord.id,
          firstName: landlord.firstName,
          lastName: landlord.lastName,
          avatar: landlord.avatar,
          // create and return the json web token
          jwt: jwt.sign({ id: landlord._id }, process.env.JWT_SECRET),
          role: landlord.role,
        };
        return returnedLandlord;
      } catch (error) {
        console.log(error);
        // if there's a problem creating the account, throw an error
        throw new Error('Error creating account');
      }
    },

    signInLandlord: async (_, { email, password }) => {
      if (email) {
        // normalize email address
        email = email.trim().toLowerCase();
      }

      const landlord = await models.Landlord.findOne({ email });

      if (!landlord) {
        throw new AuthenticationError('Error signing in');
      }

      const valid = await bcrypt.compare(password, landlord.password);

      if (!valid) {
        throw new AuthenticationError('Error signing in');
      }

      const AuthLandlord = {
        id: landlord.id,
        firstName: landlord.firstName,
        lastName: landlord.lastName,
        avatar: landlord.avatar,
        role: landlord.role,
        jwt: jwt.sign({ id: landlord._id }, process.env.JWT_SECRET),
      };
      return AuthLandlord;
    },
  },
};

export default resolvers;
