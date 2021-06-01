import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { IoArrowForward } from 'react-icons'

class InovationsForm extends Component {
   state= {
isOpen: false,
formoutsite: false,
checked: false,
   };
   openModal = () => this.setState({ isOpen: true })
   closeModal = () => this.setState({ isOpen: false });
   handleSubmit = (e) => {
       e.preventDefault();
   }
   check = () => {
    this.setState({
        checked:!this.state.checked
    })
}
fromOutsite = () => {
    this.setState({ fromOutside: true })
}
fromHome = () => {
    this.setState({ fromOutside: false })
}

    render() {
        const {handleSubmit} = this.state;
        return (
            <div className="InovationsForm">
                <label htmlFor="first_name">First Name: </label>
                <input type="text" id='firstName'/>
                <br />
                <label htmlFor="last_name"> Last Name: </label>
                <input type="text" id='lastName'/>
                <br />
                <br />
                <label htmlFor="email">Email</label>
                 <input type="text" id='email' placeholder='required' />
                 <br/>
                 <br/>
                 <button className="ml-3 black-button" type="submit" onClick={handleSubmit}>
                <IoArrowForward /> Submit
    </button>
                 {/* <Link to='./Navbar'>Navbar</Link> */}
             </div>
        );
    }
};

export default InovationsForm;