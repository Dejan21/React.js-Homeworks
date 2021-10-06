import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };

        this.handleIncrease = this.handleIncrease.bind(this);
    }

handleIncrease(){
this.setState({
    count: this.state.count +1,
});
}

handleDecrease = () => {
this.setState({
    count: this.state.count -1,
});
}
    render() {
        const {count} = this.state
        return (
            <div className="Counter mt-3">
                <div className="d-flex justify-content-center">
                <Button variant="primary" onClick={this.handleIncrease}>Increase</Button>
                <Button variant='secondary' onClick={this.handleDecrease}>Decrese</Button>
                </div>
                <span className='display-3 d-blick tect-center'>{count}</span>
            </div>
        );
    }
};

export default Counter;