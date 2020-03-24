const fetch = require('node-fetch');

const URI = 'https://api.arcsecond.io/exoplanets';

const getPlanets = async URI => {
  try {
    const response = await fetch(URI);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.dir({error});
  }
}

getPlanets(URI);