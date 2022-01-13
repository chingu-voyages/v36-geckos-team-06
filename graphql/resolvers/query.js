const Query = {
  property: async (_, { id }, { models }) => {
    const propertyToReturn = await models.Property.findById(id);
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
};

export default Query;
