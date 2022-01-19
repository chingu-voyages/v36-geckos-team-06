const Property = {
  landlord: async (property, __, { models }) => {
    const landlordDetails = await models.Landlord.findById(property.landlord);
    return landlordDetails;
  },

  rooms: async (property, __, { models }) => {
    const rooms = await models.Room.find({ _id: { $in: property.rooms } });

    return rooms || [];
  },
};

export default Property;
