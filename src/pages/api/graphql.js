/* eslint-disable consistent-return */
import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import resolvers from '../../../graphql/schema/resolvers';
import Property from '../../../models/property';
import dbConnect from '../../../lib/dbConnect';
import typeDefs from '../../../graphql/schema/schema';

const cors = Cors();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ Property }),
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
