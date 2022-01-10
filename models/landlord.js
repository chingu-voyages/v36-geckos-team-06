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
    // properties: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: `Property`,
    //   },
    // ],
  },
  { timestamps: true }
);

const Landlord = mongoose.models.Landlord || mongoose.model(`Landlord`, LandlordSchema);

export default Landlord;
