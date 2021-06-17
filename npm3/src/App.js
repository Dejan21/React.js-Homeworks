import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import 'bootstrap/dist/css/bootstrap.css';
import DigitalClock from './components/DigitalClock';

import BlogPostEx from './components/BlogPostEx';
import {Container, Row, Col, Button} from 'react-bootstrap';
import React, { Component } from 'react';

class App extends Component {
  state = {
postId: 1,

  };

  setCurrent = () => {
    this.setState({
      postId: this.state.postId +1,
    });
    //
  }

  render() {
    return (
      <Container className="App">
      <Row>
        <Col className='col-md-8 offset-md-2'>
        <Clock />
      {/* <DigitalClock /> */}
      {/* <BlockPost /> */}
      <BlogPostEx postId={this.state.postId}/>
      <Button onClick={this.setCurrent} variant='info' className='mt-5'> Load more</Button>
        </Col>
      </Row>
      </Container>
    );
  }
};

export default App;
