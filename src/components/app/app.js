import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DummySwapiService from '../../services/dummy-swapi-service';
import SwapiService from '../../services/swapi-service';

import ErrorBoundry from '../error-boundry';
import Header from '../header';
import {
  PeoplePage,
  PlanetPage,
  StarshipPage,
  LoginPage,
  SecretPage
} from '../pages';
import RandomPlanet from '../random-planet';
import { SwapiServiceProvider } from '../swapi-service-context';
import { StarshipDetails } from '../sw-components';

import './app.css';

const Bground = () => {
  return (
    <>
      <div className="stars"></div>
      <div className="star-light"></div>
    </>
  );
};


export default class App extends Component {

  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  };
  onLoggin = () => {
    this.setState({
      isLoggedIn: true
    });
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
    const { isLoggedIn } = this.state;

    return (

      <ErrorBoundry>
        <Bground />
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app app-body">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Switch>

                <Route path='/' exact render={() => <h2 className='text-center'>Welcome to StarDB</h2>} />
                <Route path='/people/:id?' component={PeoplePage} />
                <Route path='/planets' component={PlanetPage} />
                <Route path='/starships' exact component={StarshipPage} />
                <Route path='/starships/:id'
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />
                  }}
                />
                <Route path="/login"
                  render={() => (
                    <LoginPage
                      isLoggedIn={isLoggedIn}
                      onLoggin={this.onLoggin}
                    />
                  )} />
                <Route path="/secret"
                  render={() => <SecretPage isLoggedIn={isLoggedIn} />} />

                <Route render={() => <h2 className='text-center'>Page not found</h2>} />
                {/* or redirect to pages <Redirect to='/' /> */}
              </Switch>
            </div>


          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  };
};
