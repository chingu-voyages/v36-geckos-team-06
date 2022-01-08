/* eslint-disable consistent-return */
import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import typeDefs from '../../../graphql/schema/schema';
import dbConnect from '../../../lib/dbConnect';

const cors = Cors();

const mocks = {
  Query: () => ({
    properties: () => [...new Array(9)],
  }),
  Property: () => ({
    id: () => 'track_01',
    name: () => 'palm springs',
    address: () => '5 palm spring road, luton',
    postcode: () => 'L432DH',
    image: () => 'https://ucarecdn.com/bf7bc147-a50f-45fb-8620-d618fbae3c43/propertyImage.webp',
    capacity: () => 100,
  }),
};

// const mocks = {
//   Query: () => ({
//     occupant: () => [...new Array(9)],
//   }),
//   Occupant: () => ({
//     firstName: () => 'Kola',
//     lastName: () => 'Octa',
//     phoneNumber: () => '0789554321',
//     email: () => 'kola.octa@icloud.com',
//     moveInDate: () => new Date(2021, 4, 24),
//     moveOutDate: () => new Date(2022, 4, 24),
//   }),
// };

const apolloServer = new ApolloServer({
  typeDefs,
  mocks,
});

const startServer = apolloServer.start();

export default cors(async (req, res) => {
  if (req.method === `OPTIONS`) {
    res.end();
    return false;
  }

  await startServer;
  console.log(`🚀  Server is running!`);
  await dbConnect();
  console.log(`🙊 connected to mongoDb`);

  await apolloServer.createHandler({
    path: `/api/graphql`,
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
