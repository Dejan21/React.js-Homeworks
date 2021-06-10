import React, { Component } from 'react';
import axios from 'axios';


class ContactCard extends Component {
  state = {
    contact: {},
    contactId: 1,
  };

  componentDidMount() {
      axios(`https://jsonplaceholder.typicode.com/users/${this.state.contactId}`).then((res) =>{
          this.setState({
              contact:  res.data
          });
      });
  }
handleNext = () => {
    axios(`https://jsonplaceholder.typicode.com/users/${this.state.contactId +1}`).then((res) =>{
          this.setState({
              contact:  res.data,
              contactId: this.state.contactId +1
          });
      });

}
handlePrev = () => {
    axios(`https://jsonplaceholder.typicode.com/users/${this.state.contactId -1}`).then((res) =>{
        this.setState({
            contact:  res.data,
            contactId: this.state.contactId -1 
        });
    });
}

    render() {
        const{name, username, email, phone} = this.state.contact;
        return (
            <div className="ContactCard">
                <button onClick={this.handlePrev}>Previos</button>
                <button onClick={this.handleNext}>Next</button>
                <h2>Name: {name}</h2>
                <p>Username:  {username}</p>
                <p>Phone: {phone}</p>
                <p>Email: {email} </p>
            </div>
        );
    }
};

export default ContactCard;