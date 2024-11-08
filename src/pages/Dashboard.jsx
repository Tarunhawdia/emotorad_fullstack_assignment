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
  faDollarSign, // For Total Revenue
  faThumbsUp, // For Total Likes
} from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data = [
  { name: "Week 1", Guest: 200, User: 400 },
  { name: "Week 2", Guest: 150, User: 350 },
  { name: "Week 3", Guest: 300, User: 200 },
  { name: "Week 4", Guest: 250, User: 450 },
];

const productData = [
  { name: "Basic Tees", value: 40, color: "#32CD32" }, // Light green
  { name: "Custom Short Pants", value: 55, color: "#FFD700" }, // Light yellow
  { name: "Super Hoodies", value: 5, color: "#FF6347" }, // Light red
];

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState("Dashboard");

  const handleMenuClick = (section) => {
    setSelectedSection(section);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("basic");

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
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
            <div className="box box-revenue">
              <div className="icon-circle">
                <FontAwesomeIcon icon={faDollarSign} className="icon" />
              </div>
              Total Revenues
              <h3>$ 0.0 </h3>
            </div>
            <div className="box box-transactions">
              <div className="icon-circle">
                <FontAwesomeIcon icon={faExchangeAlt} className="icon" />
              </div>
              Total Transactions
              <h3>0</h3>
            </div>
            <div className="box box-likes">
              <div className="icon-circle">
                <FontAwesomeIcon icon={faThumbsUp} className="icon" />
              </div>
              Total Likes
              <h3>0</h3>
            </div>
            <div className="box box-users">
              <div className="icon-circle">
                <FontAwesomeIcon icon={faUser} className="icon" />
              </div>
              Total Users
              <h3>0</h3>
            </div>
          </div>

          {/* Row 2 - One Box */}
          <div className="row row-2">
            <div className="box full-width">
              <h2 className="box-heading">Activities</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis
                    domain={[0, 500]}
                    ticks={[0, 100, 200, 300, 400, 500]}
                  />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Guest" fill="#FF6347" barSize={50} />
                  <Bar dataKey="User" fill="#32CD32" barSize={50} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Row 3 - Two Boxes */}
          <div className="row row-3">
            <div className="box" id="top_product">
              <h3 className="box-heading">Top Products</h3>
              <div className="top-products-content">
                <PieChart width={120} height={120}>
                  <Pie
                    data={productData}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={55}
                    dataKey="value"
                    startAngle={90}
                    endAngle={450}
                  >
                    {productData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
                <div className="product-details">
                  {productData.map((product) => (
                    <div className="product-item" key={product.name}>
                      <span className="product-name">{product.name}</span>
                      <span className="product-percentage">
                        {product.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="box" id="add_profile">
              <button className="icon-button gray-circle" onClick={toggleModal}>
                +
              </button>
              <p className="add-profile-text">Add Profile</p>
            </div>
            {/* Modal */}
            {modalVisible && (
              <div className="modal-overlay">
                <div className="modal-box">
                  <button className="close-button" onClick={toggleModal}>
                    ×
                  </button>
                  <h2>Add New Profile</h2>
                  <div className="tabs">
                    <button
                      className={`tab ${activeTab === "basic" ? "active" : ""}`}
                      onClick={() => handleTabChange("basic")}
                    >
                      Basic Details
                    </button>
                    <button
                      className={`tab ${
                        activeTab === "socials" ? "active" : ""
                      }`}
                      onClick={() => handleTabChange("socials")}
                    >
                      Socials
                    </button>
                  </div>

                  {/* Content based on active tab */}
                  {activeTab === "basic" ? (
                    <div className="form">
                      <input type="text" placeholder="Name" />
                      <input type="email" placeholder="Email" />
                      <input type="tel" placeholder="Phone" />
                      <button
                        className="next-btn"
                        onClick={() => handleTabChange("socials")}
                      >
                        Next
                      </button>
                    </div>
                  ) : (
                    <div className="form">
                      <input
                        type="text"
                        placeholder="Instagram Link (Optional)"
                      />
                      <input
                        type="text"
                        placeholder="YouTube Link (Optional)"
                      />
                      <button
                        className="back-btn"
                        onClick={() => handleTabChange("basic")}
                      >
                        Back
                      </button>
                      <button className="done-btn" onClick={toggleModal}>
                        Done
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
