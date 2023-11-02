import React from 'react'
import './Navbar.css'

export default function Navbar () {
  return (
    <div className='navbarContainer'>
      <ul>
        <li>Home</li>
        <li>
          <div>Skills</div>
          <div>|</div>
        <div>Projects</div>
        <div>|</div>
          <div>Download Resume</div>
        </li>
      </ul>
    </div>
  )
}
