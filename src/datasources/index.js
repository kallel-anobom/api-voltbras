const fetch = require('node-fetch');

// poderiamos usar o padrão js de nomeação de vars
const planetsPerPage = 1000;
const URI = `https://api.arcsecond.io/exoplanets/?page_size=${planetsPerPage}`;

const getUrl = page => `${URI}?page=${page}`;
const getRequests = numberOfPages => 
  Array(numberOfPages)
      .fill()
      .map((_, i) =>
        fetch(getUrl(i+1))
        .then(res => res.json())
      )

const isSuitablePlanet = ({ mass }) => mass && mass.unit === 'M_jup' && mass.value >= 25

async function fastGetPlanets() {
  try {
    const { count: totalPlanets } = await fetch(URI).then(res => res.json());

    // se tivermos 18500 planetas, e o planetsPerPage for 1000
    // vamos ter Math.ceil(18500 / 1000) páginas
    // Math.ceil(18500 / 1000) = Math.ceil(18.5) = 19
    const numberOfPages = Math.ceil(totalPlanets / planetsPerPage)

    const pages = await Promise.all(getRequests(numberOfPages));
    // .map, mapeia uma array, e como o retorno vai ser uma Array(Array(Planeta))
    // de arrays, o .flat "achata" as arrays e o retorno vira Array(Planeta)
    const exoPlanets = pages.map(page => page.results).flat();

    // podemos cortar algumas das linhas usando
    // destructuring direto no parametro da função
    return exoPlanets
      .filter(isSuitablePlanet)
      .map(({ mass: { value }, name }) => ({
        name,
        mass: value,
        hasStation: false
      }))
  } catch (error) {
    console.error({error});
  }
}

async function getPlanets() {
  try {
    const exoPlanets = [];
    
    let response = await fetch(URI);
    let json = await response.json(); 
    
    exoPlanets.push(...json.results);
    // o jeito que foi feito
    // para pegar os dados é sequencial, portanto
    // vai esperar uma request voltar para efetuar a outra:
    while ( json.next ) {
      response = await fetch(json.next);
      json = await response.json(); 
      

      exoPlanets.push(...json.results);
    }
    // podemos fazer muitas vezes mais rápido pegando as páginas em paralelo
    // para isso podemos disparar as requests todas de uma vez
    // e usando Promise.all nas requests para esperar todas completarem
    // dá uma olhada na função fastGetPlanets


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

module.exports = fastGetPlanets;
