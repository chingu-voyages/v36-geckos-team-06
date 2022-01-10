/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { gql } from 'apollo-server-micro';
import { GraphQLDate } from 'graphql-scalars';

const typeDefs = gql`
  scalar GraphQLDate

  type Query {
    properties: [Property!]!
  }

  type Mutation {
    createProperty(
      name: String!
      address: String!
      postcode: String!
      capacity: Int
      category: String!
      image: String!
    ): Property

    updateProperty(
      id: ID!
      name: String!
      address: String!
      postcode: String!
      capacity: Int
      category: String!
      image: String!
    ): Property

    deleteProperty(id: ID!): Boolean!

    signUpLandlord(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): AuthLandlord!

    signInLandlord(email: String!, password: String!): AuthLandlord!
  }

  type AuthLandlord {
    id: ID!
    role: String
    firstName: String
    lastName: String
    avatar: String
    jwt: String
  }

  type Landlord {
    id: ID!
    role: String!
    email: String!
    avatar: String
    firstName: String
    lastName: String
    "A landlord can have many properties"
    properties: [Property!]!
  }

  type Property {
    id: ID!
    name: String!
    address: String!
    postcode: String!
    capacity: Int
    category: String!
    image: String!
    "A property can have one landlord"
    landlord: Landlord!
    "A property can have many rooms"
    rooms: [Room]
  }

  type Room {
    id: ID!
    property: Property
    name: String!
    available: Boolean
    occupant: Occupant
    charges: Charges
    repairs: [Repair!]!
  }

  input RoomInput {
    id: ID!
    name: String!
    address: String!
    postcode: String!
    capacity: Int
    category: String!
    image: String!
  }

  type Occupant {
    firstName: String
    lastName: String
    phoneNumber: String
    email: String
    moveInDate: GraphQLDate
    moveOutDate: GraphQLDate
  }

  type Charges {
    room: Room
    water: Int
    rent: Int
    electricity: Int
    parking: Int
  }

  type Repair {
    id: ID!
    room: Room
    occupant: Occupant!
    issue: String
    details: String
    status: String
  }
`;

export default typeDefs;
