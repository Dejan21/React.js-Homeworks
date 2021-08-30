import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Navbar">
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName='current'>Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='current' to='/Blog'>Blog</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='current' to="/Contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='current' to="/Details">Details</NavLink>
                </li>
                <li><a href='https:/wwww.facebook.com'>Like us on facebook</a></li>
            </ul>
        </div>
    );
};

export default Navbar;