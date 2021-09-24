import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import LogIn from './LogIn';
import SignUp from './SignUp';

const Auth = () => {
    return (
        <div className="Auth">
            <h2>Authentic page</h2>

            <p>Click here for <Link to="/Auth/SignUp">Sign up</Link> or {" "} <Link to='/Auth/LogIn'>log in</Link></p>

            <Switch>
                <Route path='/Auth/SignUp' component={SignUp} />
                <Route path='/Auth/LogIn' component={LogIn} />
            </Switch>
        </div>
    );
};

export default Auth; 