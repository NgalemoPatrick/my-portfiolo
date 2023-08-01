import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

import './NavBar.css'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
        <Link>
            <img src="" alt="Logo" className="logo" />
        </Link>
        <div className="h-menu" onClick={()=>{
            setMenuOpen(!menuOpen);
        }}>
        <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? 'open': ''}>
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