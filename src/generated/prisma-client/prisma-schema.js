module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateSuitablePlanets {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createSuitablePlanets(data: SuitablePlanetsCreateInput!): SuitablePlanets!
  updateSuitablePlanets(data: SuitablePlanetsUpdateInput!, where: SuitablePlanetsWhereUniqueInput!): SuitablePlanets
  updateManySuitablePlanetses(data: SuitablePlanetsUpdateManyMutationInput!, where: SuitablePlanetsWhereInput): BatchPayload!
  upsertSuitablePlanets(where: SuitablePlanetsWhereUniqueInput!, create: SuitablePlanetsCreateInput!, update: SuitablePlanetsUpdateInput!): SuitablePlanets!
  deleteSuitablePlanets(where: SuitablePlanetsWhereUniqueInput!): SuitablePlanets
  deleteManySuitablePlanetses(where: SuitablePlanetsWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  suitablePlanets(where: SuitablePlanetsWhereUniqueInput!): SuitablePlanets
  suitablePlanetses(where: SuitablePlanetsWhereInput, orderBy: SuitablePlanetsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SuitablePlanets]!
  suitablePlanetsesConnection(where: SuitablePlanetsWhereInput, orderBy: SuitablePlanetsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SuitablePlanetsConnection!
  node(id: ID!): Node
}

type Subscription {
  suitablePlanets(where: SuitablePlanetsSubscriptionWhereInput): SuitablePlanetsSubscriptionPayload
}

type SuitablePlanets {
  id: ID!
  name: String!
  mass: Int!
  hasStation: Boolean!
}

type SuitablePlanetsConnection {
  pageInfo: PageInfo!
  edges: [SuitablePlanetsEdge]!
  aggregate: AggregateSuitablePlanets!
}

input SuitablePlanetsCreateInput {
  id: ID
  name: String!
  mass: Int!
  hasStation: Boolean!
}

type SuitablePlanetsEdge {
  node: SuitablePlanets!
  cursor: String!
}

enum SuitablePlanetsOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  mass_ASC
  mass_DESC
  hasStation_ASC
  hasStation_DESC
}

type SuitablePlanetsPreviousValues {
  id: ID!
  name: String!
  mass: Int!
  hasStation: Boolean!
}

type SuitablePlanetsSubscriptionPayload {
  mutation: MutationType!
  node: SuitablePlanets
  updatedFields: [String!]
  previousValues: SuitablePlanetsPreviousValues
}

input SuitablePlanetsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SuitablePlanetsWhereInput
  AND: [SuitablePlanetsSubscriptionWhereInput!]
}

input SuitablePlanetsUpdateInput {
  name: String
  mass: Int
  hasStation: Boolean
}

input SuitablePlanetsUpdateManyMutationInput {
  name: String
  mass: Int
  hasStation: Boolean
}

input SuitablePlanetsWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  mass: Int
  mass_not: Int
  mass_in: [Int!]
  mass_not_in: [Int!]
  mass_lt: Int
  mass_lte: Int
  mass_gt: Int
  mass_gte: Int
  hasStation: Boolean
  hasStation_not: Boolean
  AND: [SuitablePlanetsWhereInput!]
}

input SuitablePlanetsWhereUniqueInput {
  id: ID
}
`
      }
    