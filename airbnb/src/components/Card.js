import React from "react"
import './Card.css'

export default function Card({ item}) {
    return (
        <div className="card">
            {item.openSpots === 0 && <div className='card--badge'>SOLD OUT</div>} 
            {/* curly bracket when we want sometimes to render this div */}
            <img src={`./images/${item.coverImg}`} className="card--image"/>
              
            <div className="card--stats">
                <img src="./images/star.png" className="card--star" />
                <span>{item.stats.rating}</span>
                <span className="gray">({item.stats.reviewCount}) • </span>
                <span className="gray">{item.location}</span>
            </div>
            <p className="card--title">{item.title}</p>
            <p className="card--price"><span className="bold">From ${item.price}</span> / person</p>
            
        </div>
    )
}