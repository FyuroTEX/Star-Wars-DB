import React from 'react';

import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="boom">BOOM!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        or <span className="boom"><a href="https://swapi.co/">API</a></span> does not work
      </span>
      <span>
        (but we already sent droids to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;
