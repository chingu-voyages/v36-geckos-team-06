/* eslint-disable no-underscore-dangle */
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
  },
  details: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

RepairSchema.set(`toJSON`, {
  transform: (document, returnedObject) => {
    const object = returnedObject;
    object.id = object._id.toString();
    delete object._id;
    delete object.__v;
  },
});

const Repair = mongoose.models.Repair || mongoose.model(`Repair`, RepairSchema);

export default Repair;
