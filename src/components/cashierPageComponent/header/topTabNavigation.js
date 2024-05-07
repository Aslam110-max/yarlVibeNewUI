// TopTabNavigation.js
import React, { useState } from "react";
import "./topTabNavigation.css"; // Import CSS for navigation bar styles

const TopTabNavigationCashier = ({ onSelectTab }) => {
  const [activeTab, setActiveTab] = useState("Short Eats");
  const handleTabClick = (tab) => {
    onSelectTab(tab);
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="top-tab-navigation-cashier">
      <div
        className="tab-cashier"
        style={{
          color: activeTab == "Short Eats" ? "white" : "black",
          backgroundColor:
            activeTab == "Short Eats" ? "rgb(193, 64, 0)" : "white",
        }}
        onClick={() => handleTabClick("Short Eats")}
      >
        Short Eats
      </div>
      <div
        className="tab-cashier"
        style={{
          color: activeTab == "Main Course" ? "white" : "black",
          backgroundColor:
            activeTab == "Main Course" ? "rgb(193, 64, 0)" : "white",
        }}
        onClick={() => handleTabClick("Main Course")}
      >
        Main Course
      </div>
    </div>
     
    </div>
    
  );
};

export default TopTabNavigationCashier;
