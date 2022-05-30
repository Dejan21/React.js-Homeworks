import React from 'react';
import './Card.css';
import image12 from '../images/image12.png'
import Group65 from '../images/Group65.png'

function Card ()  {
    return (
        <div className="Card">
            <img src={image12} className='card-image'/>
            <div className='card-stats'>
               <img src={Group65} alt="" />
            </div>
        </div>
    );
};

export default Card;