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

const GET_PROPERTY = gql`
  query Property($propertyId: ID!) {
    property(id: $propertyId) {
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
      rooms {
        id
      }
    }
  }
`;

export { GET_LANDLORD, IS_LOGGED_IN, GET_PROPERTY };
