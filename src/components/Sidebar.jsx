import React from "react";
import {
  FaTable,
  FaDollarSign,
  FaUserAlt,
  FaSignInAlt,
  FaSignOutAlt,
  FaTools,
  FaMale,
  FaDashcube,
} from "react-icons/fa";
import "./Sidebar.css"; // Add your CSS styles

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Soft UI Dashboard</h2>
      <div className="menu-items">
        <div>
          <FaDashcube /> Dashboard
        </div>
        <div>
          <FaTable /> Tables
        </div>
        <div>
          <FaDollarSign /> Billing
        </div>
        <div>
          <FaUserAlt /> Virtual Reality
        </div>
        <div>
          <FaTools /> RTL
        </div>

        <h2>ACCOUNT PAGES</h2>

        <div>
          <FaMale /> Profile
        </div>

        <div>
          <FaSignInAlt /> Sign In
        </div>
        <div>
          <FaSignOutAlt /> Sign Up
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
