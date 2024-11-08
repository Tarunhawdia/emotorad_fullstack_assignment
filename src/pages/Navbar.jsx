// src/components/Navbar.js
import React from "react";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ selectedMenu }) => {
  return (
    <div className="navbar">
      {/* Left side: Selected menu title */}
      <div className="navbar-title">{selectedMenu}</div>

      {/* Right side: Search, Notification, and Profile icons */}
      <div className="navbar-right">
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
          <FaSearch className="icon" />
        </div>
        <FaBell className="icon" />
        <FaUser className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
