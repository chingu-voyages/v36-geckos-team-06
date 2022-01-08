/* eslint-disable no-unused-vars */
import { gql } from 'apollo-server-micro';
import { GraphQLDate } from 'graphql-scalars';

const typeDefs = gql`
  scalar GraphQLDate

  type Query {
    properties: [Property!]!
    landlord: Landlord
  }

  type Property {
    id: ID!
    name: String!
    address: String!
    postcode: String!
    capacity: Int
    image: String!
    rooms: [Room!]!
  }

  type Landlord {
    id: ID!
    name: String!
    email: String!
  }

  type Room {
    id: ID!
    name: String!
    available: Boolean
    occupant: Occupant
    chargers: Charges
    repairs: [Repair!]!
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
    Property: Property!
    occupant: Occupant!
    issue: String
    details: String
    status: [Status!]!
  }

  type Status {
    ongoing: String
    fixed: String
    reported: String
  }
`;

export default typeDefs;
