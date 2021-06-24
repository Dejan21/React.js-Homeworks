import React, { Component } from 'react';
import './App.css';
import Cart from './components/Cart';
import Products from './components/Products';


class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
            id: 0,
            name: 'Product 1',
        }, 
        {
            id: 1,
            name: 'Product 2',
        }, 
        {
            id: 2,
            name: 'Product 3',
        },
    ],
       itemsInCart: 0,
    };
  }

  updateCart = () => {
    // console.log('hello from App.js')
    this.setState({
      itemsInCart: this.state.itemsInCart +1,
    });
  };

  render() {
    return (
      <div className="App">
        <Cart itemsInCart={this.state.itemsInCart}/>
        <Products products={this.state.products} updateCart={this.updateCart} />
      </div>
    );
  }
};

export default App;
