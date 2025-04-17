import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      
<ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">ABOUT</Link></li>
  
</ul>

    </div>
  )
}

export default Navbar
