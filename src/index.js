import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const getResource = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`could not fetch ${url}, received ${res.status}`)
        }
        const body = await res.json();
        return body;
    };
    getResource('https://swapi.co/api/people/1/')
        .then((body) => {
            console.log(body);
        })
        .catch((err) => {
            console.error('could not fetch', err);
        });

    // fetch('https://swapi.co/api/people/1/')
    //     .then((res) => {
    //         return res.json();
    //     })
    //     .then((body) => {
    //         console.log(body);
    //     });
    console.log('Hello World');
    return <h1>Hello World!</h1>
}

ReactDOM.render(<App />, document.getElementById('root'));
