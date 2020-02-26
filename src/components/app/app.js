import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DummySwapiService from '../../services/dummy-swapi-service';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import Header from '../header';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';
import RandomPlanet from '../random-planet';
import { SwapiServiceProvider } from '../swapi-service-context';
import { StarshipDetails } from '../sw-components';
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
              <Route path='/' exact render={() => <h2>Welcome to StarDB</h2>} />
              <Route path='/people/:id?' component={PeoplePage} />
              <Route path='/planets' component={PlanetPage} />
              <Route path='/starships' exact component={StarshipPage} />
              <Route path='/starships/:id'
                render={({ match }) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />
                }}
              />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  };
};
