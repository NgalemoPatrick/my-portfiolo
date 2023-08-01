import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
        <Link>
            <img src="" alt="Logo" className="logo" />
        </Link>
        <div className="h-menu">
        <span></span>
            <span></span>
            <span></span>
        </div>
        <ul>
            <li>
                <NavLink to="/">ABOUT ME</NavLink>

            </li>
            <li>
                <NavLink to="/Project">PROJECTS</NavLink>
            </li>
            <li>
                <NavLink to="/Contact">CONTACT</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar