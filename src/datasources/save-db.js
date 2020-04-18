const getPlanets = require('./index');

// em vez de conectarmos diretamente ao mongo, poderíamos usar o prisma
const { prisma } = require('../generated/prisma-client');

// salvando pelo prisma
// economizamos muitaaaaas linhas
const saveThroughPrisma = async () => {
  const planets = await getPlanets();
  await Promise.all(
    planets.map(prisma.createSuitablePlanet)
  );
};

saveThroughPrisma();