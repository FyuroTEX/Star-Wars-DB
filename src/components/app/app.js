import React, { Component } from 'react';
import Header from '../header';
import ErrorBoundry from '../error-boundry';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import DummySwapiService from '../../services/dummy-swapi-service';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {
  PeoplePage,
  PlanetPage,
  StarshipPage
} from '../pages';

import './app.css';


export default class App extends Component {

  state = {
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      }
    })
  };
  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app app-body">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              {/* <PeoplePage />
              <PlanetPage />
              <StarshipPage /> */}
              <Route path='/people' component={PeoplePage} />
              <Route path='/planets' component={PlanetPage} />
              <Route path='/starships' component={StarshipPage} />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  };
};
