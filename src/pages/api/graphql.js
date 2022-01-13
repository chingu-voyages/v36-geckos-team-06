/* eslint-disable consistent-return */
import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import jwt from 'jsonwebtoken';
import resolvers from '../../../graphql/resolvers/index';
import models from '../../../models/index';
import dbConnect from '../../../lib/dbConnect';
import typeDefs from '../../../graphql/schema/schema';

const cors = Cors();

// get the user info from a JWT
const getLoggedInUser = (token) => {
  if (token) {
    try {
      // return the user information from the token
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      // if there's a problem with the token, throw an error
      throw new Error('Session invalid');
    }
  }
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const landlordToken = req.headers.authorization;
    const landlord = getLoggedInUser(landlordToken);
    console.log(landlord);
    return { models, landlord };
  },
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
