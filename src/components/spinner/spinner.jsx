import React from 'react';

import './spinner.css';


const Spinner = () => {
    return (
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );
};
export default Spinner;