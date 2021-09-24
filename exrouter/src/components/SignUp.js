import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="SignUp">
                <label htmlFor="username">Username</label>

                   < input type="text" id="username" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} />
                   <br />
                  <br />
                   <Link to="/homepage">Sign Up</Link>   
            </div>
        );
    }
};

export default SignUp;