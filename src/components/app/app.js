import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
// import ItemList from '../item-list';
// import PersonDetails from '../person-details';
import PeoplePage from '../people-page';

import './app.css';

class App extends Component {
  // state = {
  //   selectedPerson: 1
  // };
  // onPersonSelected = (id) => {
  //   this.setState({
  //     selectedPerson: id
  //   });
  // };

  render() {
    return (
      <div style={{ margin: '0 auto', maxWidth: '1100px' }}>
        <Header />
        <RandomPlanet />

        {/* <div className="row mb2"> */}
          {/* <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div> */}
          <PeoplePage />
        {/* </div> */}
      </div>
    );
  };
};

export default App;