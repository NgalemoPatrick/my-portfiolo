import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">ABOUT ME</Link>
            </li>
            <li>
                <Link to="/PROJECTS">PROJECTS</Link>
            </li>
            <li>
                <Link to="/CONTACT">CONTACT</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar