const { ApolloServer } = require('apollo-server');
const { prisma } = require('./generated/prisma-client/index');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

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