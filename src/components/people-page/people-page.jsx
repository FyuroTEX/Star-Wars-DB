import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator/error-indicator';
import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import './people-page.css';






export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: 2,
  };



  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };


  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    };
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>
        {(i) => `${i.name} ( ${i.birthYear} )`}
      </ItemList>
    );
    const personDetails = (
      <ItemDetails itemId={this.state.selectedPerson} />
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  };
};
