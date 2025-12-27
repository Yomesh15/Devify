import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const Navigate = useNavigate()
  
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:2006/api/register",
        register
      );

      if (res.data.success) {
        alert("User Registered successfully ✅");
        setRegister({ name: "", email: "", password: "" });
        Navigate("/login")
      } else {
        alert("Failed to Register User ❌");
      }
    } catch (error) {
      console.error("Axios error:", error.response || error.message);
      alert("Failed to Register User ❌");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create Account</h2>
        <p className="subtitle">Join our service platform</p>

        <form onSubmit={handlesubmit}>
          <div className="input-group">
            <label>Name</label>
            <input
              name="name"
              type="text"
              placeholder="Full name"
              value={register.name}
              onChange={handlechange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email address"
              value={register.email}
              onChange={handlechange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Create password"
              value={register.password}
              onChange={handlechange}
              required
            />
          </div>

          <button type="submit" className="btn">Register</button>

          <p className="switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
