import { useState } from "react";
import "./orderDetailsKitchen.css"
const OrderDetailsKitchen=({orderId,dateAndTime})=>{
    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapse = () => {
      setCollapsed(!collapsed);
    };
    const OrderDetails=()=>{
        return (
            <div className="kitchen-order-food-details">
      <div className="kitchen-sub-order-food-details">
        <div className="kitchen-order-food-name">foodName</div>
        <div style={{ display: "flex" }}>
        <div style={{paddingRight:"30%", fontWeight: "bold"}}>2</div>
          <span
            className={`kitchen-arrow ${collapsed ? "kitchen-collapsed" : ""}`}
            onClick={toggleCollapse}
          >
            &#x25BC;
          </span>
        </div>
      </div>
      {!collapsed && (
        <div className="kitchen-collapsible-content">
          <p>text custermizing</p>
        </div>
      )}
    </div>
        );
    }

    return (
        <div className="kitchen-order-details-kitchen">
            <div>Order Id: {orderId}</div>
            <div style={{fontWeight:"bold",fontSize:"80%",color:"grey",marginBottom:"5%"}}>{dateAndTime}</div>
            <OrderDetails/>
        </div>
    )
}
export default OrderDetailsKitchen;