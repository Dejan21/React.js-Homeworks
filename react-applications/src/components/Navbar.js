import React from "react"
import './Navbar.css'
import Airbnb from '../images/Airbnb.jpg'

function Navbar () {
    return (
      <div>
          <nav>
              <img className="image" src={Airbnb} alt="" />
          </nav>
      </div>
    )
  }

  export default Navbar