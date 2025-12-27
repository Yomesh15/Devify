import React from 'react'
import "../CSS/Navbar.css"
import devifylogo from "../assets/devify2.jpeg"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        {/* <img src={devifylogo} alt="" /> */}
        <Link to={"/"} className='link2'><h2>Devify</h2></Link>

      </div>
      <ul>
        <Link to="/" className='linkk'><li>Home</li></Link>
        <Link to="/about" className='linkk'><li>About Us</li></Link>
        <Link to="/services" className='linkk'><li>Services</li></Link>
        <Link to="/contact" className='linkk'><li>Contact</li></Link>
      </ul>

      <div className="buttons">
        <Link to="login"><button className="login">Login</button></Link>
        <Link to="register"><button className="signup">Sign Up</button></Link>
      </div>
    </div>
  )
}

export default Navbar
