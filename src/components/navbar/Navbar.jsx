import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from './Navbar.styled'

const Navbar = () => {
  return (
    <div>
      <div>
        <Logo src="../assets/default-image.jpg" />
      </div>
      <div>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Github</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Logout</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar