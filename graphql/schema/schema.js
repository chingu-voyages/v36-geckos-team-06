/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { gql } from 'apollo-server-micro';
import { GraphQLDate } from 'graphql-scalars';

const typeDefs = gql`
  scalar GraphQLDate

  type Query {
    properties: [Property!]!
    landlord: Landlord
  }

  type Mutation {
    newProperty(input: PropertyInput): Property
  }

  type Landlord {
    id: ID!
    email: String!
    avatar: String
    firstName: String
    lastName: String
  }

  type Property {
    id: ID!
    name: String!
    address: String!
    postcode: String!
    capacity: Int
    category: String!
    image: String!
    rooms: [Room!]!
  }

  input PropertyInput {
    name: String!
    address: String!
    postcode: String!
    capacity: Int
    category: String!
    image: String!
    rooms: [RoomInput]
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
