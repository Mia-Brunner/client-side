import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to='/'> <h1> to be replaced with image of company name</h1></Link>
      <ul>
        <li>
          <Link to='/services'>Services</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar