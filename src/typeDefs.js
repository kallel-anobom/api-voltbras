const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    suitablePlanets(first: Int!, skip: Int!): [SuitablePlanet]! 
  }

  type Mutation {
    installStation(where: SuitablePlanetsWhereUniqueInput!): SuitablePlanet!
  }

  # de novo, o type em si é SuitablePlanet
  # e todos os seus subcampos, pelo próprio design
  # do nosso DB, são obrigatórios então podemos deixa-los
  # obrigatorios, o que dá mais certeza pra quem vai consumir
  type SuitablePlanet {
    id: ID!
    name: String,!
    mass: Float!
    hasStation: Boolean!
  }

  # Input desnecessário
  # input SuitablePlanetsUpdateInput {
  #   name: String,
  #   mass: Int,
  #   hasStation: Boolean,
  # }

  input SuitablePlanetsWhereUniqueInput {
    id: ID!
  }

`;

module.exports = typeDefs;