import { ApolloClient, InMemoryCache } from '@apollo/client';

// configure our API URI & cache
const uri = `http://localhost:3000/api/graphql`;
const cache = new InMemoryCache();

// configure Apollo Client
const apolloClient = new ApolloClient({ uri, cache });

export default apolloClient;
