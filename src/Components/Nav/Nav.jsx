import React, { useState } from 'react'
import "./Nav.css"
import { Link } from "react-router-dom"
import { FaBars, FaTimes} from "react-icons/fa"

const Nav = () => {
    const [displayNav, setdisplayNav] = useState(false)
    const navDisplayHandler = () => {
        setdisplayNav(!displayNav)
    }
  return (
    <div className='Nav'>
        <div className='Logo'>
            <h1>Logo</h1>
        </div>
        <ul className={displayNav ? "NavList active" : "NavList"}>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/About">About</Link>
            </li>

            <li>
                <Link to="/Services">Portfolio</Link>
            </li>

            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
        <div className='Hamburger' onClick={navDisplayHandler}>
            {displayNav ? <FaTimes /> : <FaBars /> }
        </div>
      
    </div>
  )
}

export default Nav
// {displayNav ? "Navlist" : "Navlist .active"}