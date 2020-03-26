const { prisma } = require('./generated/prisma-client/index');

const resolvers = {
  Query:{
    suitablePlanets: () => prisma.suitablePlanetses()
  }
}

module.exports = resolvers