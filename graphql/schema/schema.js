/* eslint-disable no-unused-vars */
import { gql } from 'apollo-server-micro';
import { GraphQLDate } from 'graphql-scalars';

const typeDefs = gql`
  scalar GraphQLDate

  type Query {
    property(id: ID): Property
    landlord(id: ID): Landlord
    room(id: ID): Room
    repair(id: ID): Repair
    repairs: [Repair!]!
  }

  type Mutation {
    # Property
    createProperty(
      name: String!
      address: String!
      postcode: String!
      city: String!
      country: String!
      capacity: String
      category: String!
    ): Property

    updateProperty(
      id: ID!
      name: String!
      address: String!
      postcode: String!
      capacity: String
      country: String!
      category: String!
    ): Property

    deleteProperty(id: ID!): Boolean!

    # Auth and Users
    signUpLandlord(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): AuthLandlord!

    signInLandlord(email: String!, password: String!): AuthLandlord!

    # Room
    createRoom(
      roomNumber: String!
      propertyName: String!
      available: String!
      occupant: OccupantInput
      charges: ChargesInput
    ): Room

    updateRoom(
      id: ID!
      roomNumber: String!
      propertyName: String!
      available: String!
      occupant: OccupantInput
      charges: ChargesInput!
    ): Room

    deleteRoom(id: ID!): Boolean!

    # Repair
    createRepair(roomNumber: String, issue: String, details: String, status: String): Repair

    updateRepair(
      id: ID!
      roomNumber: String
      issue: String
      details: String
      status: String
    ): Repair

    deleteRepair(id: ID!): Boolean!
  }

  # Types
  type Landlord {
    id: ID!
    role: String!
    email: String!
    avatar: String
    firstName: String
    lastName: String
    properties: [Property!]
    jwt: String
  }

  type AuthLandlord {
    id: ID!
    role: String!
    avatar: String
    firstName: String
    jwt: String
  }

  type Property {
    id: ID!
    name: String!
    address: String!
    postcode: String!
    city: String!
    country: String!
    capacity: String
    category: String!
    thumbnail: String!
    fullImage: String!
    landlord: Landlord!
    rooms: [Room]
  }

  type Room {
    id: ID!
    property: Property
    roomNumber: String!
    available: String!
    occupant: Occupant
    charges: Charges
    repairs: [Repair]
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
    water: String
    rent: String
    electricity: String
    parking: String
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
    water: String
    rent: String
    electricity: String
    parking: String
  }
`;

export default typeDefs;
