

const Planets = ()=>{
    const planetList = [
        {name: 'Mars', isGasPlanet: false},
        {name: 'Eearh', isGasPlanet: false},
        {name: 'Jupiter', isGasPlanet: true},
        {name: 'Venus', isGasPlanet: false},
        {name: 'Neptune', isGasPlanet: true},
        {name: 'Uranus', isGasPlanet: true},
    ]
    return(
        <div>
        {planetList.map(planet=>
        planet.isGasPlanet  && <h3>{planet.name}</h3>
        )}
        </div>
    )
}

export default Planets