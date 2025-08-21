import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
