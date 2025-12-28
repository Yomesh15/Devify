import React from 'react'
import "../CSS/Navbar.css"
import { Link, useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation() // track route changes

  // Check token every render
  const isLoggedIn = !!localStorage.getItem("token")

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" className='link2'><h2>Devify</h2></Link>
      </div>

      <ul>
        <Link to="/" className='linkk'><li>Home</li></Link>
        <Link to="/about" className='linkk'><li>About Us</li></Link>
        <Link to="/services" className='linkk'><li>Services</li></Link>
        <Link to="/contact" className='linkk'><li>Contact</li></Link>
      </ul>

      <div className="buttons">
        {!isLoggedIn ? (
          <>
            <Link to="/login"><button className="login">Login</button></Link>
            <Link to="/register"><button className="signup">Sign Up</button></Link>
          </>
        ) : (
          <button className="logout login" onClick={handleLogout}>Logout</button>
        )}
      </div>
    </div>
  )
}

export default Navbar
