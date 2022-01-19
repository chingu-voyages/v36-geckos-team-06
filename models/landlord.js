/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';

const LandlordSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      index: { unique: true },
    },
    lastName: {
      type: String,
      required: true,
      index: { unique: true },
    },
    email: {
      type: String,
      required: true,
      index: { unique: true },
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

LandlordSchema.set(`toJSON`, {
  transform: (document, returnedObject) => {
    const object = returnedObject;
    object.id = object._id.toString();
    delete object._id;
    delete object.__v;
  },
});

const Landlord = mongoose.models.Landlord || mongoose.model(`Landlord`, LandlordSchema);

export default Landlord;
