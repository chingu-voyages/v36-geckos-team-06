import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: { unique: true },
  },
  available: {
    Boolean,
    required: true,
  },
  occupant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: `Occupant`,
    required: true,
  },
  charges: {
    type: mongoose.Schema.Types.ObjectId,
    ref: `Charges`,
    required: true,
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
