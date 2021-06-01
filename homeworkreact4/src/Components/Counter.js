// excercise 1
import React, { Component } from 'react';

class Counter extends Component {
   state = {
       count: 0,
   };

   handleIncrease = () => {
    //   console.log('clicked on the button')
      this.setState({
          count: this.state.count +1,
      })
   }

   handleDecrease = () => {
// console.log('clicked on the button')
this.setState({
    count: this.state.count -1
})
}


    render() {
        const{count} = this.state
        return (
            <div className="Counter">
               <button onClick={this.handleIncrease}>Increase</button>
               <button onClick={this.handleDecrease}>Decrease</button>
               <span>{count}</span>
            </div>
        );
    }
};

export default Counter;
