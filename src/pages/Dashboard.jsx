// src/pages/Dashboard.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faExchangeAlt,
  faCalendarAlt,
  faUsers,
  faCog,
  faBell,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState("Dashboard");

  const handleMenuClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="dashboard-container">
      {/* Left Sidebar */}
      <div className="sidebar">
        <h1 className="sidebar-heading">Board.</h1>
        <ul className="sidebar-menu">
          <li onClick={() => handleMenuClick("Dashboard")}>
            <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
            Dashboard
          </li>
          <li onClick={() => handleMenuClick("Transactions")}>
            <FontAwesomeIcon icon={faExchangeAlt} className="icon" />
            Transactions
          </li>
          <li onClick={() => handleMenuClick("Schedules")}>
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            Schedules
          </li>
          <li onClick={() => handleMenuClick("Users")}>
            <FontAwesomeIcon icon={faUsers} className="icon" />
            Users
          </li>
          <li onClick={() => handleMenuClick("Settings")}>
            <FontAwesomeIcon icon={faCog} className="icon" />
            Settings
          </li>
        </ul>
        <div className="sidebar-bottom">
          <ul>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <div className="navbar">
          <div className="navbar-title">{selectedSection}</div>
          <div className="navbar-actions">
            <div className="navbar-search">
              <input type="text" placeholder="Search..." />
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
            <FontAwesomeIcon icon={faBell} className="icon" />
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>
        </div>

        {/* Dashboard Content Grid */}
        <div className="dashboard-content">
          {/* Row 1 - Four Boxes */}
          <div className="row row-1">
            <div className="box">Total Revenue</div>
            <div className="box">Total Transactions</div>
            <div className="box">Total Likes</div>
            <div className="box">Total Users</div>
          </div>

          {/* Row 2 - One Box */}
          <div className="row row-2">
            <div className="box full-width">Activity</div>
          </div>

          {/* Row 3 - Two Boxes */}
          <div className="row row-3">
            <div className="box">Top Products</div>
            <div className="box">Add Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;