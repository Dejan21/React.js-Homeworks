// excercise 2
import React, { Component } from 'react';

class Roll extends Component {
   state= {
     roll: 0,
     
   };
diceroll = () => {
      let random = Math.floor((Math.random()*6)+1);
    this.setState({
        roll: random
       
    });
}

    render() {
        const {roll,} = this.state;
        return (
            <div className="Roll">
                <button onClick={this.diceroll}>Roll</button>
                <span>{roll}</span>
            </div>
        );
    }
};

export default Roll;