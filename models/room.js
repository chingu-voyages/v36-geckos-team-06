import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  roomNumber: {
    type: String,
    required: true,
    index: { unique: true },
  },
  available: String,
  occupant: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    moveInDate: { type: Date, required: true },
    moveOutDate: { type: Date, required: true },
  },
  charges: {
    water: String,
    rent: String,
    electricity: String,
    parking: String,
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
