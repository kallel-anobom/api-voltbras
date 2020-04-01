const { prisma } = require('./generated/prisma-client/index');

const resolvers = {
  Query: {
    // mudando no data model, melhorou o nome da função de pegar os planetas
    // em nivel de design de API, poderiamos deixar opcional o first,skip
    // quando usei pela primeira vez, achei um pouco estranho ser obrigatório, poderia ter um default value
    suitablePlanets: async (_, args) => prisma.suitablePlanets({first: args.first, skip: args.skip})
  },
  Mutation: {
    // só precisamos do ID do planeta pra instalar uma estação nele
    installStation: (_, { where: { id } }) =>
      prisma.updateSuitablePlanet({
        where: { id },
        data: { hasStation: true }
      })
  }
}

module.exports = resolvers