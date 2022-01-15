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
    $capacity: String
  ) {
    createProperty(
      name: $name
      address: $address
      postcode: $postcode
      city: $city
      country: $country
      category: $category
      capacity: $capacity
    ) {
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
`;

export { SIGN_IN_LANDLORD, SIGN_UP_LANDLORD, CREATE_PROPERTY };
