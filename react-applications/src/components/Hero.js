import React from 'react';
import './Hero.css'
import photogrid from '../images/photogrid.png'


function Hero () {
    return (
        <section className="Hero">
            <img src={photogrid} className='hero--photo' />
            <h1>Online Experiences</h1>
            <p>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    );
};

export default Hero;