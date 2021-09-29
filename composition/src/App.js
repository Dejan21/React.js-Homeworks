
import axios from 'axios';
import './App.css';
import Card  from './components/Card';
import GrayCard from './components/GrayCard';
import React, { Component } from 'react';



class App extends Component {
 state={
   posts: [],
 }

  componentDidMount () {
    axios('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      this.setState({posts: res.data});
    });
  }

render() {
 return (
    <div className="App">
     {/* // excercise 1,2 and 3 
       <Card title="karticka" >
         
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim sint eius vitae est, veritatis repudiandae eum quidem neque voluptates quibusdam, autem rem dicta aut velit sed ipsam delectus, odit ullam.</p>
       </Card>
       <Card title="Karticka 1">
         
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim sint eius vitae est, veritatis repudiandae eum quidem neque voluptates quibusdam, autem rem dicta aut velit sed ipsam delectus, odit ullam.</p>
       </Card>
       
       <GrayCard>
       <Card title="Karticka 2">
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim sint eius vitae est, veritatis repudiandae eum quidem neque voluptates quibusdam, autem rem dicta aut velit sed ipsam delectus, odit ullam.</p>
       </Card>
       
       </GrayCard>
       <GrayCard>
       <Card title="Karticka 3">
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim sint eius vitae est, veritatis repudiandae eum quidem neque voluptates quibusdam, autem rem dicta aut velit sed ipsam delectus, odit ullam.</p>
       </Card>
       </GrayCard> */}

       {/* excercise 4 */}

       {this.state.posts.map((el) => (
         <Card key={el.id} title={el.title}>
           <p>{el.body}</p>
         </Card>
       ))}

    </div>
  );
 };
}

export default App;
