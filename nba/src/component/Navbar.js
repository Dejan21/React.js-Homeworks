import React, { Component } from 'react';
import axios from 'axios';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
            img: [],
        };
    }
componentDidMount () {
    axios('https://www.balldontlie.io/api/v1/players').then((response) => {
        this.setState({
            user: [this.state.user, response.data],
        });
    });
   
}
    render() {
        const {user, img} = this.state;
        return (
            <div className="Navbar">
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                          <img src={require(`../assets/nbalogo.jpg`)} alt="" />
                          
                        </div>
                    
                    </div>

                </div>
            </div>
        );
    }
};

export default Navbar;