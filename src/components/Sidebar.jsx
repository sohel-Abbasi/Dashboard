import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTable,
  FaDollarSign,
  FaUserAlt,
  FaSignInAlt,
  FaSignOutAlt,
  FaTools,
  FaMale,
  FaDashcube,
  FaRegStar,
} from "react-icons/fa";
import "./Sidebar.css"; // Add your CSS styles

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Soft UI Dashboard</h2>
      <div className="menu-items">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaDashcube className="icon" /> Dashboard
        </NavLink>
        <NavLink
          to="/tables"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaTable className="icon" /> Tables
        </NavLink>
        <NavLink
          to="/billing"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaDollarSign className="icon" /> Billing
        </NavLink>
        <NavLink
          to="/virtual-reality"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaUserAlt className="icon" /> Virtual Reality
        </NavLink>
        <NavLink
          to="/rtl"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaTools className="icon" /> RTL
        </NavLink>

        <h2>Account Pages</h2>

        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaMale className="icon" /> Profile
        </NavLink>
        <NavLink
          to="/signin"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaSignInAlt className="icon" /> Sign In
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaSignOutAlt className="icon" /> Sign Up
        </NavLink>
      </div>
      <div className="sidebar-help-box">
        <FaRegStar className="help-star" size={32} />
        <p>
          Need help? <br />
          <span className="help-link">Please check our docs</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
