import { gql } from '@apollo/client';

const IS_LOGGED_IN = gql`
  {
    landlordIsLoggedIn @client
  }
`;

const GET_LANDLORD = gql`
  query ($landlordId: ID) {
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
  query Property($propertyId: ID) {
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
      landlord {
        id
      }
      rooms {
        id
        roomNumber
        available
      }
    }
  }
`;

const GET_ROOM = gql`
  query Room($roomId: ID) {
    room(id: $roomId) {
      id
      property {
        fullImage
        name
      }
      roomNumber
      available
      occupant {
        firstName
        lastName
        phoneNumber
        email
        moveInDate
        moveOutDate
      }
      charges {
        water
        rent
        electricity
        parking
      }
      repairs {
        id
      }
    }
  }
`;
const GET_REPAIRS = gql`
  query Repairs {
    repairs {
      id
      room {
        id
      }
      issue
      details
      status
    }
  }
`;

export { GET_LANDLORD, IS_LOGGED_IN, GET_PROPERTY, GET_REPAIRS, GET_ROOM };
