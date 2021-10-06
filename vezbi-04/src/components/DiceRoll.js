import React, { Component } from 'react';

class DiceRoll extends Component {
    constructor() {
        super();
        this.state = {
            roll: 1,
        };
    }

    diceRoll =() => {

let randomNum = Math.floor (Math.random() * 6) + 1;
this.setState({  roll: randomNum
});
    }

    render() {
        const {roll} = this.state
        return (
            <div className="DiceRoll">
                <button onClick={this.diceRoll}>Roll</button>
                <span>{roll}</span>
            </div>
        );
    }
};

export default DiceRoll;