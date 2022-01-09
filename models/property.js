import mongoose from 'mongoose';

// Define the property database schema
const PropertySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    postcode: { type: String, required: true },
    capacity: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    // Array of rooms in the property
    rooms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: `Room`,
      },
    ],
  },
  { timestamps: true }
);

const Property = mongoose.models.PropertySchema || mongoose.model(`Property`, PropertySchema);

export default Property;
