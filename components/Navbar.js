import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Navbar">
            <ul>
                <li><NavLink to='/Home'>Home</NavLink></li>
                <li><NavLink to='/About'>About</NavLink></li>
                <li><NavLink to='/Auth'>Auth</NavLink></li>
                <li><NavLink to='/FAQ'>FAQ</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;