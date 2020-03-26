const { prisma } = require('./generated/prisma-client/index');

const resolvers = {
  Query: {
    suitablePlanets: async (_, args) => prisma.suitablePlanetses({first: args.first, skip: args.skip})
  },
  Mutation: {
    installStation: (_, args) => {
      const { name, mass, hasStation } = args;
      const { id } = args.where;

      return prisma.updateSuitablePlanets({
        data: {
          name,
          mass,
          hasStation
        },
        where: {
          id
        },
      })
    }
  }
}

module.exports = resolvers