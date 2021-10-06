import React, { Component } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';

class ContactCard extends Component {
    state = {
        contact: {},
        contactId: 1,
    };

componentDidMount() {
   axios(`https://jsonplaceholder.typicode.com/users/${this.state.contactId}`).then((res) => {
this.setState({contact: res.data});
   });
}

handleNext = () => {
    axios(`https://jsonplaceholder.typicode.com/users/${this.state.contactId + 1}`).then((res) => {
        this.setState({
            contact: res.data,
        contactId: this.state.contactId + 1
              });
           });
        }
handlePrev = () => {
    axios(`https://jsonplaceholder.typicode.com/users/${this.state.contactId - 1}`).then((res) => {
        this.setState({
            contact: res.data,
        contactId: this.state.contactId - 1
              });
            });
 }

    render() {
        const{name, username, email, phone} = this.state.contact;
        return (
            <div className="ContactCard mt-5">
                <div className="d-flex justify-content-center">
                <Button variant = 'primary' onClick={this.handleNext}>Next</Button>
                <Button variant = 'secondary' onClick={this.handlePrev}>Previous</Button>
                </div>

                <h2 className="h3 font-weight-bold mt-3">Name: {name}</h2>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
            </div>
        );
    }
};

export default ContactCard;