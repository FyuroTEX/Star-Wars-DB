import React, { Component } from 'react';
import Header from '../header';
import ErrorBoundry from '../error-boundry';
// import SwapiService from '../../services/swapi-service';
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components';
import { SwapiServiceProvider } from '../swapi-service-context';

import DummySwapiService from '../../services/dummy-swapi-service';


import './app.css';

export default class App extends Component {
  swapiService = new DummySwapiService();
  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
        <div className="stardb-app app-body">
          <Header />
          <PlanetDetails itemId={3}/>
          <PersonDetails itemId={11}/>
          <StarshipDetails itemId={9}/>

          <PersonList />
          
          <StarshipList />
           
          <PlanetList />
           


          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  };
};
