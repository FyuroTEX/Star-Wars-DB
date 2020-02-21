import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Header from '../header';
import Row from '../row';
import ItemDetails, { Record } from '../item-details/item-details';
import './app.css';


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
    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;
    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      >
        <Record field='gender' label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails
        itemId={9}
        getData={getStarship}
        getImageUrl={getStarshipImage}>
        <Record field='model' label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );
    return (
      <div className='app-body'>
        <Header />
        {/* <RandomPlanet />


        <PeoplePage /> */}

        <Row
          left={personDetails}
          right={starshipDetails} />
      </div>
    );
  };
};

export default App;