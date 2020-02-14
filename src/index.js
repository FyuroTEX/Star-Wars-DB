// import React from 'react';
// import ReactDOM from 'react-dom';

// function App() {

//     const getResource = async (url) => {
//         const res = await fetch(url);
//         if (!res.ok) {
//             throw new Error(`could not fetch ${url}, received ${res.status}`)
//         }
//         return await res.json();
//     };
//     getResource('https://swapi.co/api/people/1/')
//         .then((body) => {
//             console.log(body);
//         })
//         .catch((err) => {
//             console.error('could not fetch', err);
//         });

//     // fetch('https://swapi.co/api/people/1/')
//     //     .then((res) => {
//     //         return res.json();
//     //     })
//     //     .then((body) => {
//     //         console.log(body);
//     //     });
//     console.log('Hello World');
//     return <h1>Hello World!</h1>
// }

// ReactDOM.render(<App />, document.getElementById('root'));
class SwapiService {
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
    getPersone(id) {
        return this.getResource(`/people/${id}`);
    };
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
const swapi = new SwapiService();
swapi.getAllPeople().then((people) => {
    people.forEach((p) => {
        console.log(p.name);
    });
});