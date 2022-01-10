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
    landlord: {
      type: mongoose.Schema.Types.ObjectId,
      ref: `Landlord`,
    },
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

const Property = mongoose.models.Property || mongoose.model(`Property`, PropertySchema);

export default Property;
