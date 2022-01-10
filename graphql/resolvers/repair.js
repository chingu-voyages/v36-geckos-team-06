const Repair = {
  room: async (repair, __, { models }) => {
    const roomToRepair = await models.Room.findById(repair.room);
    return roomToRepair;
  },
};

export default Repair;
