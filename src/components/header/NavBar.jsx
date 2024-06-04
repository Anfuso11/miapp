import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {

  return (
    <nav className="nav">
        <ul className="nav-menu">
            <li className="nav-item">
              <NavLink to="/" activeclassname="active" className="nav-link">HOMBRE</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" activeclassname="active" className="nav-link">MUJER</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" activeclassname="active" className="nav-link">NIÑO</NavLink>
            </li>
            
        </ul>
    </nav>
  )
}