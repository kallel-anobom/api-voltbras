const mongoose = require('mongoose');

const PlanetSchema = require('./Models/Planet');
const Planets = require('./datasources/index');

mongoose.connect('mongodb://prisma:prisma@localhost:28017/default_default?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true } );

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', async function() {
  try {
    const result = await Planets;

    console.log("Connection Successful!");
    
    const PlanetStation = mongoose.model('Planet', PlanetSchema, 'SuitablePlanets');

    result.map((data) => {
      const roundedInteger = Math.round(data.mass);

      const { name,  hasStation } = data;

      const newPlanetStation = new PlanetStation({
        name,
        mass: roundedInteger,
        hasStation
      });

      PlanetStation.collection.insert(newPlanetStation, function(err, docs) {
        if ( err ) return console.error(err);
        console.log('Docs', docs);
        return 
      });
    });
  
  } catch (error) {
    console.error(error);  
  }
});
