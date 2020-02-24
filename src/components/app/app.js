import React, { Component } from 'react';
import Header from '../header';
import ErrorBoundry from '../error-boundry';

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components';


import './app.css';

export default class App extends Component {

  render() {

    return (
      <ErrorBoundry>
        <div className="stardb-app app-body">
          <Header />
          <PlanetDetails itemId={3}/>
          <PersonDetails itemId={11}/>
          <StarshipDetails itemId={9}/>

          <PersonList />
          
          <StarshipList />
           
          <PlanetList />
           


        </div>
      </ErrorBoundry>
    );
  }
}
