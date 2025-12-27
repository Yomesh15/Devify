import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Login.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:2006/api/login",
        login
      );

      if (res.data.success) {
        alert("Login successful ✅");
        navigate("/"); 
      } else {
        alert("Invalid credentials ❌");
      }
    } catch (error) {
      console.error("Axios error:", error.response || error.message);
      alert("Login failed ❌");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome Back</h2>
        <p className="subtitle">Login to continue</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={login.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              value={login.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn">Login</button>

          <p className="switch">
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
