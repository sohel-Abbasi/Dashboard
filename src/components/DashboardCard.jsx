import React, { useEffect, useState } from "react";
import "./DashboardCard.css"; // Add your CSS styles

const DashboardCard = ({ title, amount, percentChange, icon: Icon }) => {
  const [currentAmount, setCurrentAmount] = useState(amount);
  const [currentPercent, setCurrentPercent] = useState(percentChange);

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random percent change between -10 and +10
      const randomPercent = Math.floor(Math.random() * 21) - 10;
      // Generate random amount based on initial amount type
      let base =
        typeof amount === "number"
          ? amount
          : parseInt(String(amount).replace(/[^0-9]/g, ""), 10);
      let newAmount = base + Math.floor(Math.random() * 1000 - 500);
      // Format amount if it was a string with $ or +
      if (typeof amount === "string") {
        if (amount.includes("$")) newAmount = `$${newAmount}`;
        if (amount.includes("+")) newAmount = `+${Math.abs(newAmount)}`;
      }
      setCurrentAmount(newAmount);
      setCurrentPercent(randomPercent);
    }, 3000);

    return () => clearInterval(interval);
  }, [amount]);

  return (
    <div className="dashboard-card">
      <div>
        <h3>{title}</h3>
        <div className="amount">
          <h2>{currentAmount}</h2>
          <span style={{ color: currentPercent > 0 ? "green" : "red" }}>
            {currentPercent}%
          </span>
        </div>
      </div>
      <div>{Icon && <Icon className="card-icon" />}</div>
    </div>
  );
};

export default DashboardCard;
