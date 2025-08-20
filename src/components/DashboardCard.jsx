import React from "react";
import "./DashboardCard.css"; // Add your CSS styles
import { FaDollarSign } from "react-icons/fa";

const DashboardCard = ({ title, amount, percentChange }) => {
  return (
    <div className="dashboard-card">
      <div>
        <h3>{title}</h3>
        <div className="amount">
          <h2>{amount}</h2>
          <span>{percentChange}</span>
        </div>
      </div>
      <div>
        <FaDollarSign />
      </div>
    </div>
  );
};

export default DashboardCard;
