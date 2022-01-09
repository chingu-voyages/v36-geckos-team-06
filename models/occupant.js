import mongoose from 'mongoose';

// Define the occupant database schema
const OccupantSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  moveInDate: { type: Date, required: true },
  moveOutDate: { type: Date, required: true },
});

const Occupant = mongoose.models.Occupant || mongoose.model(`Occupant`, OccupantSchema);

export default Occupant;
