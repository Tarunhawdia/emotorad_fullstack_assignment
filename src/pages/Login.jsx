// src/pages/Login.js
import React from "react";
import { useNavigate } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder for actual authentication logic
    console.log("Logged in successfully");
    navigate("/dashboard");
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log(response);
    // Navigate to dashboard after successful Google login
    navigate("/dashboard");
  };

  const handleGoogleLoginFailure = (error) => {
    console.error(error);
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
          {/* Google Sign-In Button */}
          <div className="google-login">
            <h3>Google Sign-In Button</h3>
            {/* Google login functionality is disabled for now */}
            {/* <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginFailure}
                useOneTap
              /> */}
          </div>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>

            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
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
