import { gql } from '@apollo/client';

const SIGN_IN_LANDLORD = gql`
  mutation SignInLandlord($email: String!, $password: String!) {
    signInLandlord(email: $email, password: $password) {
      id
      role
      avatar
      firstName
      jwt
    }
  }
`;

const SIGN_UP_LANDLORD = gql`
  mutation SignUpLandlord(
    $firstName: String!
    $email: String!
    $password: String!
    $lastName: String!
  ) {
    signUpLandlord(firstName: $firstName, email: $email, password: $password, lastName: $lastName) {
      id
      role
      avatar
      firstName
      jwt
    }
  }
`;

const CREATE_PROPERTY = gql`
  mutation CreateProperty(
    $name: String!
    $address: String!
    $postcode: String!
    $city: String!
    $country: String!
    $category: String!
  ) {
    createProperty(
      name: $name
      address: $address
      postcode: $postcode
      city: $city
      country: $country
      category: $category
    ) {
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
`;

const UPDATE_PROPERTY = gql`
  mutation UpdateProperty(
    $updatePropertyId: ID!
    $name: String!
    $address: String!
    $postcode: String!
    $category: String!
    $country: String!
  ) {
    updateProperty(
      id: $updatePropertyId
      name: $name
      address: $address
      postcode: $postcode
      country: $country
      category: $category
    ) {
      id
      name
      address
      city
      postcode
      country
      category
      thumbnail
      fullImage
      rooms {
        id
      }
    }
  }
`;

const DELETE_PROPERTY = gql`
  mutation DeleteProperty($deletePropertyId: ID!) {
    deleteProperty(id: $deletePropertyId)
  }
`;

const CREATE_ROOM = gql`
  mutation CreateRoom(
    $roomNumber: String!
    $propertyId: String!
    $available: String!
    $occupant: OccupantInput
    $charges: ChargesInput
  ) {
    createRoom(
      roomNumber: $roomNumber
      propertyId: $propertyId
      available: $available
      occupant: $occupant
      charges: $charges
    ) {
      id
      property {
        id
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

const UPDATE_ROOM = gql`
  mutation UpdateRoom(
    $updateRoomId: ID!
    $roomNumber: String!
    $available: String!
    $charges: ChargesInput!
    $occupant: OccupantInput
  ) {
    updateRoom(
      id: $updateRoomId
      roomNumber: $roomNumber
      available: $available
      charges: $charges
      occupant: $occupant
    ) {
      id
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

export {
  SIGN_IN_LANDLORD,
  SIGN_UP_LANDLORD,
  CREATE_PROPERTY,
  UPDATE_PROPERTY,
  DELETE_PROPERTY,
  CREATE_ROOM,
  UPDATE_ROOM,
};
