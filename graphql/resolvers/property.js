const Property = {
  landlord: async (property, __, { models }) => {
    const landlordDetails = await models.Landlord.findById(property.landlord);
    return landlordDetails;
  },
};

export default Property;
