import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import PeoplePage from '../people-page';

import './app.css';
import SwapiService from '../../services/swapi-service';

class App extends Component {

  swapiService = new SwapiService();
  
  state = {
    selectedPerson: null
  };
  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    return (
      <div style={{ margin: '0 auto', maxWidth: '1100px' }}>
        <Header />
        <RandomPlanet />


        <PeoplePage />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
              renderItem={(item) => item.name} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
              renderItem={(item) => (
                <span>{item.name}<button>!</button></span>
              )}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  };
};

export default App;