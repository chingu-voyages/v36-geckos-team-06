import { gql } from '@apollo/client';

const IS_LOGGED_IN = gql`
  {
    landlordIsLoggedIn @client
  }
`;

const GET_LANDLORD = gql`
  query ($landlordId: ID!) {
    landlord(id: $landlordId) {
      id
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
        capacity
        category
        thumbnail
        fullImage
      }
    }
  }
`;

export { GET_LANDLORD, IS_LOGGED_IN };
