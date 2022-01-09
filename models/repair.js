import mongoose from 'mongoose';

const RepairSchema = new mongoose.Schema({
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: `Room`,
  },
  occupant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: `Occupant`,
  },
  issue: {
    type: String,
    required: true,
    index: { unique: true },
  },
  details: {
    type: String,
    required: true,
    index: { unique: true },
  },
  status: {
    type: String,
    required: true,
    index: { unique: true },
  },
});

const Repair = mongoose.models.Repair || mongoose.model(`Repair`, RepairSchema);

export default Repair;
