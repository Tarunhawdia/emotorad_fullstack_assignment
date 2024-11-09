// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Add this import
import SocialLinks from "../components/SocialLinks";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      if (error.response && error.response.status === 400) {
        alert("Invalid credentials");
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <div className="logo">
          <h1>BASE</h1>
        </div>
        <SocialLinks />
      </div>

      <div className="right-section">
        <div className="form-container">
          <h2>Sign In</h2>
          <h3>Sign in to your account</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit">Login</button>

            <div className="register-link">
              <p>
                Don't have an account? <a href="/register">Register here</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
