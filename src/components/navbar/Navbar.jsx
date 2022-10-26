import React from 'react'
import { Logo } from './Navbar.styled'

const Navbar = () => {
  return (
    <div>
      <div>
        <Logo src="../assets/default-image.jpg"/>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Github</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar