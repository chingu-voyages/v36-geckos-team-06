/* eslint-disable no-undef */
import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: `/api/graphql`,
});

// check for a token and return the headers to the context
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const landlord = localStorage.getItem(`authLandlord`);
  const { jwt } = landlord != null && JSON.parse(landlord);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: jwt || ``,
    },
  };
});

const cache = new InMemoryCache();

// create the Apollo client
const apolloClient = new ApolloClient({
  // uri: `/api/graphql`,
  link: authLink.concat(httpLink),
  cache: cache,
  resolvers: {},
});

// check for a local token & write the cache data on initial load
cache.writeQuery({
  query: gql`
    query getAuth {
      landlordIsLoggedIn
    }
  `,
  // Contains the data to write
  data: {
    landlordIsLoggedIn: typeof window !== `undefined` && !!localStorage.getItem(`authLandlord`),
  },
});

apolloClient.onResetStore(async () =>
  cache.writeQuery({
    query: gql`
      query getAuth {
        landlordIsLoggedIn
      }
    `,
    data: {
      landlordIsLoggedIn: typeof window !== `undefined` && !!localStorage.getItem(`authLandlord`),
    },
  })
);

export default apolloClient;
