// excercise 1
import React, { Component } from 'react';
import moment from 'moment';

class DigitalClock extends Component {
    state = {
         time: '00.00.00'
    }
    componentDidMount () {
        setInterval(() => {
            this.setState({
                time: moment().format('hh-mm-ss a')
            })
        })  
        console.log(moment().format('hh-mm-ss a'));
    };

   
    render() {
        return (
            <div className="DigitalClock">
                <h2>The time is: {this.state.time} </h2>
            </div>
        );
    }
};

export default DigitalClock;