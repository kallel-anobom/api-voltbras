const { ApolloServer } = require('apollo-server');
const { prisma } = require('./generated/prisma-client/index');
const { importSchema } = require('graphql-import');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const path = require('path');

// const typeDefs = importSchema(path.join(__dirname, 'schema.graphql'));

// const resolvers = {
//   Query: {
//     suitablePlanets: async () => await prisma.suitablePlanets
//   },
//   Mutation: {
//     createInstallStation: async(args) => {
//       const installStation = {name: args.name, mass: args.mass, hasStation: args.hasStation};
//       return prisma.createInstallStation(installStation);
//     }
//   }
// };


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma
  }
});


server.listen().then(( { url } ) => {
  console.log(`Server ready at ${url}`);
});