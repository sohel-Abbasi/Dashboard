import React from "react";
import DashboardCard from "./DashboardCard";
import SalesOverview from "./SalesOverview";
import {
  FaSignInAlt,
  FaCog,
  FaBell,
  FaSearch,
  FaDollarSign,
  FaUser,
  FaUserPlus,
  FaShoppingCart,
} from "react-icons/fa";
import "./Dashboard.css";
import DynamicLineChart from "./DynamicLineChart";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-header-right">
          <h2>Dashboard</h2>
        </div>

        <div className="dashboard-header-left">
          <div className="dashboard-search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              className="dashboard-search"
              placeholder="Search..."
            />
          </div>
          <span className="header-icon">
            <FaSignInAlt />
            <span className="header-text">Sign In</span>
          </span>
          <span className="header-icon">
            <FaCog />
          </span>
          <span className="header-icon">
            <FaBell />
          </span>
        </div>
      </div>
      <div className="top-stats">
        <DashboardCard
          title="Today's Money"
          amount="$53,000"
          percentChange={+3}
          icon={FaDollarSign}
        />
        <DashboardCard
          title="Today's Users"
          amount="2,300"
          percentChange={-4}
          icon={FaUser}
        />
        <DashboardCard
          title="New Clients"
          amount="+3,462"
          percentChange={-2}
          icon={FaUserPlus}
        />
        <DashboardCard
          title="Sales"
          amount="$103,430"
          percentChange={+5}
          icon={FaShoppingCart}
        />
      </div>
      <div className="extra-content">
        <div className="extra-chart">
          <SalesOverview />
        </div>
        <div className="extra-chart">
          <DynamicLineChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
