import React from "react";
import "./SalesOverview.css"; // Add your CSS styles

const SalesOverview = () => {
  return (
    <div className="sales-overview">
      <h3>Sales Overview</h3>
      <p>4% more in 2021</p>
      <div className="chart">{/* Add your chart here */}</div>
    </div>
  );
};

export default SalesOverview;
