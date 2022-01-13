import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  roomNumber: {
    type: String,
    required: true,
    index: { unique: true },
  },
  available: Boolean,
  occupant: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    moveInDate: { type: Date, required: true },
    moveOutDate: { type: Date, required: true },
  },
  charges: {
    water: Number,
    rent: Number,
    electricity: Number,
    parking: Number,
  },
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: `Property`,
  },
  repairs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: `Repair`,
    },
  ],
});

const Room = mongoose.models.Room || mongoose.model(`Room`, RoomSchema);

export default Room;
