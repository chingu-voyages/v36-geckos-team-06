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

    createRoom(
      roomNumber: String!
      propertyName: String!
      available: Boolean
      occupant: OccupantInput
      charges: ChargesInput!
    ): Room

    createRepair(roomNumber: String, issue: String, details: String, status: String): Repair
  }

  # Types
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
    landlord: Landlord!
    rooms: [Room]
  }

  type Room {
    id: ID!
    property: Property
    roomNumber: String!
    available: Boolean
    occupant: Occupant
    charges: Charges
    repairs: [Repair!]
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
    water: Int
    rent: Int
    electricity: Int
    parking: Int
  }

  type Repair {
    id: ID!
    room: Room
    issue: String
    details: String
    status: String
  }

  # Inputs
  input OccupantInput {
    firstName: String
    lastName: String
    phoneNumber: String
    email: String
    moveInDate: GraphQLDate
    moveOutDate: GraphQLDate
  }

  input ChargesInput {
    water: Int
    rent: Int
    electricity: Int
    parking: Int
  }
`;

export default typeDefs;
