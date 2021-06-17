import React, { Component } from 'react';
import moment from 'moment';
import {format} from 'date-fns';


class Clock extends Component {
    state = {
       time: '00.00.00'
    }
componentDidMount () {
// console.log(moment().format('h:mm:ss a' )); da se izbegnuva moment date-fns e podobar
// console.log(format(new Date(), 'hh-mm-ss a'));

let timeInterval = setInterval(() => {
    let currentTime = format(new Date(), 'hh-mm-ss a');

    this.setState({
        time: currentTime,
    });
}, 1000)

this.setState({
    timeInterval,
});
}
componentWillUnmount() {
    clearInterval(this.state.timeInterval);
}
    render() {
        const{time} = this.state;
        return (
            <div className="Clock">
               <h2>The time is: {this.state.time}</h2>
            </div>
        );
    }
};

export default Clock;