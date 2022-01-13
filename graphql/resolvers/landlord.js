const Landlord = {
  properties: async (landlord, __, { models }) => {
    const propertyList = await models.Property.find({ landlord: landlord.id }).sort({ _id: -1 });

    return propertyList || [];
  },
};

export default Landlord;
