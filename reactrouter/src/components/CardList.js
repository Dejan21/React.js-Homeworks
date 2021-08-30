import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        };
    }


    componentDidMount () {
  fetch('https://jsonplaceholder.typicode.com/posts/')
  .then((res) => res.json())
   .then((data) => {
    this.setState({posts: data.slice(0, 10) });
      });
    }


    render() { 
        return (
        <div className="CardList">
            <h2>{this.props.title}</h2>
            {this.state.posts.map((el) =>(
              <Card key={el.id} title={el.title} />
            ))}
        </div>
        );
    }
};

export default CardList;