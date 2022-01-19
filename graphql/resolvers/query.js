const Query = {
  property: async (_, { id }, { models }) => {
    const propertyToReturn = await models.Property.findById(id);
    return propertyToReturn;
  },

  properties: async (_, __, { models }) => {
    const propertyToReturn = await models.Property.find({});
    return propertyToReturn;
  },

  room: async (_, { id }, { models }) => {
    const roomToReturn = await models.Room.findById(id);
    return roomToReturn;
  },

  repairs: async (_, __, { models }) => {
    const repairsToReturn = await models.Repair.find({});
    return repairsToReturn;
  },

  repair: async (_, { id }, { models }) => {
    const repairToReturn = await models.Repair.findById(id);
    return repairToReturn;
  },

  landlord: async (_, { id }, { models }) => {
    const landlordToReturn = await models.Landlord.findById(id);
    return landlordToReturn;
  },
};

export default Query;
