/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AuthenticationError, ForbiddenError } from 'apollo-server-micro';
import models from '../../models';
import { getCategoryImage, getAvatar } from '../../utils';

const Mutation = {
  // CRUD mutations

  // PROPERTY

  // Create Property
  createProperty: async (
    _,
    { name, address, postcode, category, city, country },
    { models, landlord }
  ) => {
    if (!landlord) {
      throw new AuthenticationError(`You must be signed in to create a property`);
    }

    const image = getCategoryImage(category);

    const newProperty = {
      name: name.trim().toLowerCase(),
      address: address.trim().toLowerCase(),
      postcode: postcode.trim().toLowerCase(),
      city: city.trim().toLowerCase(),
      country: country.trim().toLowerCase(),
      category: category,
      fullImage: image.fullImage,
      thumbnail: image.thumbnail,
      landlord: new mongoose.Types.ObjectId(landlord.id),
      rooms: [],
    };

    const propertyToSave = await models.Property.create(newProperty);
    return propertyToSave;
  },
  // Update Property
  updateProperty: async (
    _,
    { id, name, address, postcode, category, country },
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

    // Get Property Image
    const image = getCategoryImage(category);
    const { fullImage } = image;
    const { thumbnail } = image;

    const updatedProperty = await models.Property.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          name,
          address,
          postcode,
          category,
          country,
          fullImage,
          thumbnail,
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

  // ROOM

  // Create Room
  createRoom: async (_, { roomNumber, available, occupant, charges, propertyId }, { models }) => {
    const roomProperty = await models.Property.findById(propertyId);

    const newRoom = {
      property: new mongoose.Types.ObjectId(roomProperty.id),
      roomNumber: roomNumber,
      available: available,
      occupant: {
        firstName: occupant.firstName,
        lastName: occupant.lastName,
        avatar: getAvatar(),
        phoneNumber: occupant.phoneNumber,
        email: occupant.email,
        moveInDate: new Date(occupant.moveInDate),
        moveOutDate: new Date(occupant.moveOutDate),
      },
      charges: {
        water: charges.water,
        rent: charges.rent,
        electricity: charges.electricity,
        parking: charges.parking,
      },
      repairs: [],
    };

    const roomToSave = await models.Room.create(newRoom);

    await models.Property.findByIdAndUpdate(
      propertyId,
      { $push: { rooms: new mongoose.Types.ObjectId(roomToSave.id) } },
      { new: true }
    );

    return roomToSave;
  },

  // Update Room
  updateRoom: async (_, { roomNumber, available, occupant, charges, id }, { models, landlord }) => {
    if (!landlord) {
      throw new AuthenticationError(`You must be signed in to update the room`);
    }

    const updatedRoom = await models.Room.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          roomNumber,
          available,
          occupant,
          charges,
        },
      },
      { new: true }
    );

    return updatedRoom;
  },

  // Delete Room
  deleteRoom: async (_, { id }, { models, landlord }) => {
    if (!landlord) {
      throw new AuthenticationError(`You must be signed in to delete a room`);
    }
    // find the room
    const room = await models.Room.findById(id);

    try {
      // if everything checks out, remove the note
      await room.remove();
      // Remove room from property array
      await models.Property.findByIdAndUpdate(
        room.property,
        { $pull: { rooms: new mongoose.Types.ObjectId(room.id) } },
        { new: true }
      );
      return true;
    } catch (error) {
      return false;
    }
  },

  // REPAIR

  // Create Repair
  createRepair: async (_, { roomNumber, issue, details, status }, { models }) => {
    const roomToRepair = await models.Room.findOne({ roomNumber: roomNumber });

    const newRepair = {
      room: new mongoose.Types.ObjectId(roomToRepair.id),
      issue: issue,
      details: details,
      status: status,
    };

    const repairToSave = await models.Repair.create(newRepair);

    await models.Room.findByIdAndUpdate(
      repairToSave.room,
      { $push: { repairs: new mongoose.Types.ObjectId(repairToSave.id) } },
      { new: true }
    );

    return repairToSave;
  },

  // Update Repair
  updateRepair: async (_, { roomNumber, issue, details, status, id }, { models }) => {
    const updatedRoom = await models.Repair.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          roomNumber,
          issue,
          details,
          status,
        },
      },
      { new: true }
    );

    return updatedRoom;
  },

  // Delete Repair
  deleteRepair: async (_, { id }, { models }) => {
    // find the room
    const repair = await models.Repair.findById(id);

    try {
      // if everything checks out, remove the note
      await repair.remove();
      // Remove Repair from room  array
      await models.Room.findByIdAndUpdate(
        repair.room,
        { $pull: { repairs: new mongoose.Types.ObjectId(repair.id) } },
        { new: true }
      );
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

  signUpTenant: async (_, { email, password, role = 'tenant' }) => {
    // normalize email address
    email = email.trim().toLowerCase();
    // hash the password
    const hashed = await bcrypt.hash(password, 10);

    let returnedTenant;

    try {
      const tenant = await models.Tenant.create({
        email,
        avatar: getAvatar(),
        password: hashed,
        role,
      });

      returnedTenant = {
        id: tenant.id,
        email: tenant.email,
        // create and return the json web token
        jwt: jwt.sign({ id: tenant._id }, process.env.JWT_SECRET),
        role: tenant.role,
      };
      return returnedTenant;
    } catch (error) {
      console.log(error);
      // if there's a problem creating the account, throw an error
      throw new Error('Error creating account');
    }
  },

  signInTenant: async (_, { email, password }) => {
    if (email) {
      // normalize email address
      email = email.trim().toLowerCase();
    }

    const tenant = await models.Tenant.findOne({ email });

    if (!tenant) {
      throw new AuthenticationError('Error signing in');
    }

    const valid = await bcrypt.compare(password, tenant.password);

    if (!valid) {
      throw new AuthenticationError('Error signing in');
    }

    const AuthTenant = {
      id: tenant.id,
      email: tenant.email,
      avatar: tenant.avatar,
      role: tenant.role,
      jwt: jwt.sign({ id: tenant._id }, process.env.JWT_SECRET),
    };
    return AuthTenant;
  },
};

export default Mutation;
