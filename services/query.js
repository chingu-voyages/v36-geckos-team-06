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
        id
        name
      }
      roomNumber
      available
      occupant {
        firstName
        avatar
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
        issue
        details
        status
        room {
          roomNumber
          property {
            name
          }
        }
      }
    }
  }
`;

const GET_TENANT = gql`
  query Tenant($email: String) {
    tenant(email: $email) {
      id
      property {
        id
        name
        address
        postcode
        city
        fullImage
        thumbnail
        category
        country
        landlord {
          id
          avatar
        }
      }
      roomNumber
      available
      occupant {
        firstName
        avatar
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
        issue
        status
        details
        room {
          id
          property {
            id
            name
          }
        }
      }
    }
  }
`;

const GET_REPAIRS = gql`
  query Repairs {
    repairs {
      id
      status
      details
      issue
      room {
        id
        property {
          name
          id
        }
        roomNumber
        available
        repairs {
          id
          issue
          details
          status
        }
      }
    }
  }
`;

export { GET_LANDLORD, IS_LOGGED_IN, GET_PROPERTY, GET_REPAIRS, GET_ROOM, GET_TENANT };
