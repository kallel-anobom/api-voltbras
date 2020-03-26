const fetch = require('node-fetch');

const per_page = 1000;
const URI = `https://api.arcsecond.io/exoplanets/?page_size=${per_page}`;

async function getPlanets() {
  try {
    const exoPlanets = [];
    
    let response = await fetch(URI);
    let json = await response.json(); 
    
    exoPlanets.push(...json.results);
    while ( json.next ) {
      response = await fetch(json.next);
      json = await response.json(); 
      

      exoPlanets.push(...json.results);
    }

    const planets = exoPlanets.map(result => {
      const namePlanet = result.name

      if ( !result.hasOwnProperty('mass') || result.mass === null ) return;

      const { value, unit } = result.mass;

      if ( unit === 'M_jup' && value > 25 ) {
        const hasStation = true;

        return suitablePlanets = {
          name: namePlanet,
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
    console.error({error});
  }
}

module.exports = getPlanets();
