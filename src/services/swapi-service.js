
export default class SwapiService {
    _apiBase = 'https://swapi.co/api'
    async getResource(url) {

        const res = await fetch(`${this._apiBase}${url}`); 
        if (!res.ok) {
            throw new Error(`could not fetch ${url}, received ${res.status}`)
        };
        return await res.json();
    };
    _extractId(item) {
        const idRegExp = /\d+/g;
        return item.url.match(idRegExp)[0];
    };
    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    };
    async getPersone(id) {
    const person = await this.getResource(`/people/${id}`);
        return this._transformPerson(person);   
    };
    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        };
    };
    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet());
    };
    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    };
    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    };
   
   
    async getAllStarships() {
        const starship = await this.getResource(`/starships/`);
        return starship.results.map(this._trasformStarship);
    };

    async getStarship(id) {
       const starship = this.getResource(`/starships/${id}`);
        return this._transformStarship(starship);
    };
    _transformStarship(starship) {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        };
    };
};
// const swapi = new SwapiService();
// swapi.getAllPeople().then((people) => {
//     people.forEach((p) => {
//         console.log(p.name);
//     });
// });
// swapi.getPersone(3).then((body) => {
//     console.log(`Get 3 persone: ${body.name}`);
// });