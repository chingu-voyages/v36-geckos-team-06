import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: { unique: true },
  },
  available: {
    Boolean,
  },
  occupant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: `Occupant`,
    required: true,
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
