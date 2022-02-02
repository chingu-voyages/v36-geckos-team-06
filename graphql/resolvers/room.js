const Room = {
  property: async (room, __, { models }) => {
    const roomProperty = await models.Property.findById(room.property);
    return roomProperty;
  },

  repairs: async (room, __, { models }) => {
    // Find repairs that exist in the array in Repair document
    const roomRepairs = await models.Repair.find({ _id: { $in: room.repairs } });

    return roomRepairs || [];
  },
};

export default Room;
