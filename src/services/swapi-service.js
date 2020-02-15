
export default class SwapiService {
    _apiBase = 'https://swapi.co/api'
    async getResource(url) {

        const res = await fetch(`${this._apiBase}${url}`); 
        if (!res.ok) {
            throw new Error(`could not fetch ${url}, received ${res.status}`)
        };
        return await res.json();
    };
    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results;
    };
    async getPersone(id) {
    return await this.getResource(`/people/${id}`);
         
    };
    // async getPersone(id) {
    //    const item = await this.getResource(`/people/${id}`);
    //     return item;
    // };
    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    };
    getPlanet(id) {
        return this.getResource(`/planets/${id}`);
    };
    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results;
    };

    getStarship(id) {
        return this.getResource(`/starships/${id}`);
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