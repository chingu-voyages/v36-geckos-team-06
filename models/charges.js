import mongoose from 'mongoose';

const ChargesSchema = new mongoose.Schema({
  water: {
    type: Number,
  },
  rent: {
    type: Number,
  },
  electricity: {
    type: Number,
  },
  parking: {
    type: Number,
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: `Room`,
    required: true,
  },
});

const Charges = mongoose.models.Charges || mongoose.model(`Charges`, ChargesSchema);

export default Charges;
