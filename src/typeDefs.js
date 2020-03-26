const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    suitablePlanets(first: Int!, skip: Int!): [SuitablePlanets]! 
  }

  type Mutation {
    installStation(data: SuitablePlanetsUpdateInput!, where: SuitablePlanetsWhereUniqueInput!): SuitablePlanets!
  }

  type SuitablePlanets {
    id: ID,
    name: String,
    mass: Int,
    hasStation: Boolean,
  }
  
  input SuitablePlanetsUpdateInput {
    name: String,
    mass: Int,
    hasStation: Boolean,
  }

  input SuitablePlanetsWhereUniqueInput {
    id: ID!
  }

`;

module.exports = typeDefs;