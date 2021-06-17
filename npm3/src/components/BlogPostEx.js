import axios from "axios";
import React, { Component } from "react";
import {Card} from 'react-bootstrap';

class BlogPostEx extends Component {
  state = {
    user: [],
    photo: [],
  };

  componentDidMount() {
    axios(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}`).then((response) => {
      this.setState({
        user: [this.state.user, response.data],
      });
    });

    axios(`https://jsonplaceholder.typicode.com/photos/${this.props.postId}`).then((response) => {
      this.setState({
        photo: [this.state.photo, response.data],
      });
    });
  }
//vo componentdidupdate se sekogas pravi proverka so IF, no i so nego se pravi ako sakame da ja refresirame stranata
  componentDidUpdate(prevProps, prevState){
if (prevProps.postId !== this.props.posId) {
  axios(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}`).then((response) => {
      this.setState({
        user: [this.state.user, response.data],
      });
    });

    axios(`https://jsonplaceholder.typicode.com/photos/${this.props.postId}`).then((response) => {
      this.setState({
        photo: [this.state.photo, response.data],
      });
    });
   }
  }

  render() {
    const { user, photo } = this.state;
    return user.map ((el, i) => (
      <Card className="flex-row align-items-start" key={i}>
        <Card.Img variant="bottom" src={photo[i] &&photo[i].thumbnailUrl} alt="" />

       <Card.Body>
       <Card.Title>{el.title}</Card.Title>
        <Card.Text>{el.body}</Card.Text>
       </Card.Body>
      </Card>
    ));
  }
}

export default BlogPostEx;
