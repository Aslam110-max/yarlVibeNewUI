import { useState,useEffect } from "react";
import CounterComponent from "./counterComponent";
import "./foodOrderDetails.css";
const FoodOrderDetails = ({ foodName, price, setTotalPrice }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };
  const [subTotalPrice, setSubTotalPrice] = useState(price);
 

  
  return (
    <div className="order-food-details">
      <div className="sub-order-food-details">
        <CounterComponent setSubTotalPrice={setSubTotalPrice} setTotalPrice={setTotalPrice} price={price} />
        <div className="order-food-name">{foodName}</div>
        <div style={{ display: "flex" }}>
          <div className="order-food-price">Rs.{subTotalPrice}</div>
          <span
            className={`arrow ${collapsed ? "collapsed" : ""}`}
            onClick={toggleCollapse}
          >
            &#x25BC;
          </span>
        </div>
      </div>
      {!collapsed && (
        <div className="collapsible-content">
          <input
            type="text"
            className="food-custermizing-text-field"
            placeholder="Custermize food..."
          />
        </div>
      )}
    </div>
  );
};
export default FoodOrderDetails;
