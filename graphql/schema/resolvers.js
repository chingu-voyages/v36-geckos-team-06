const resolvers = {
  Mutation: {
    newProperty: async (
      _,
      { input: { name, address, postcode, capacity, category, image } },
      { Property }
    ) => {
      const newProperty = {
        name: name,
        address: address,
        postcode: postcode,
        capacity: capacity,
        category: category,
        image: image,
        rooms: [],
      };

      const propertyToSave = await Property.create(newProperty);
      return propertyToSave;
    },
  },
};

export default resolvers;
