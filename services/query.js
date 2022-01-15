import { gql } from '@apollo/client';

const IS_LOGGED_IN = gql`
  {
    landlordIsLoggedIn @client
  }
`;

const GET_LANDLORD = gql`
  query ($landlordId: ID!) {
    landlord(id: $landlordId) {
      role
      avatar
      firstName
      properties {
        id
        name
        address
        postcode
        city
        country
      }
    }
  }
`;

export { GET_LANDLORD, IS_LOGGED_IN };
