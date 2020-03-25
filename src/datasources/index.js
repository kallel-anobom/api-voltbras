const { prisma } = require('../generated/prisma-client');

const fetch = require('node-fetch');

const URI = 'https://api.arcsecond.io/exoplanets';

async function getPlanets() {
  try {
    const response = await fetch(URI);
    const json = await response.json(); 
    const result = json.results;
    
    const planets = result.map(result => {
     
    if ( !result.hasOwnProperty('mass') || result.mass === null ) return;

    const { name, value, unit } = result.mass;

      if ( unit === 'M_jup' && value > 25 ) {
        const hasStation = true;

        return suitablePlanets = {
          name,
          mass: value,
          hasStation
        }
      }
    });

    const filteredPlanets = planets.filter(function(clean){
      return clean !== undefined && clean !== null && clean !== '';
    })
    
    return filteredPlanets;
  
  } catch (error) {
    console.dir({error});
  }
}

module.exports = getPlanets();
