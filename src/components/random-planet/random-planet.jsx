import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  static defaultProps = {
    updateInterval: 7500
  };
  static propTypes = {
    updateInterval: PropTypes.number
  };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    setInterval(this.updatePlanet, updateInterval);
  };


  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePlanet = () => {
    const id = Math.floor((Math.random() * 17) + 1);
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };


  render() {

    const { planet, loading, error } = this.state;
    const errorIndicator = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = (!loading && !error) ? <PlanetView planet={planet} /> : null;

    return (

      <div className="random-planet jumbotron rounded">
        {errorIndicator}
        {spinner}
        {content}
      </div>



    );
  };
};


const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <div className='random-planet'>
      <img className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={`Planet ${name}`} />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};