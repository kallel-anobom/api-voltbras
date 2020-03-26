const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
  suitablePlanets: [SuitablePlanets]!
}

type SuitablePlanets {
  id: ID,
  name: String,
  mass: Int,
  hasStation: Boolean,
}
`;

module.exports = typeDefs;