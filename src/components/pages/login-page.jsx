import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLoggin }) => {
    if (isLoggedIn) {
        return <Redirect to='/' />;
    };
    return (
        <div className='jumbotron'>
            <p>Login to see secret page!</p>
            <button
                className='btn btn-primary'
                onClick={onLoggin}
            >Login</button>
        </div>
    );
};
export default LoginPage;