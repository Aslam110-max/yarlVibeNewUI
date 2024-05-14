import {  useState } from "react";
import "./orderDetailsKitchen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
const OrderDetailsKitchen = ({
  orderId,
  dateAndTime,
  setIsOrderSelected,
  ordersDetails,
}) => {
  
  
  const OrderDetails = ({ foodName, quantity, custermixeText }) => {
    const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };
    return (
      <div className="kitchen-order-food-details">
        <div className="kitchen-sub-order-food-details">
          <div className="kitchen-order-food-name">{foodName}</div>
          <div style={{ display: "flex" }}>
            <div style={{ paddingRight: "30%", fontWeight: "bold" }}>
              {quantity}
            </div>
            <span
              className={`kitchen-arrow ${
                collapsed ? "kitchen-collapsed" : ""
              }`}
              onClick={toggleCollapse}
            >
              &#x25BC;
            </span>
          </div>
        </div>
        {!collapsed && (
          <div className="kitchen-collapsible-content">
            <p>{custermixeText===""?"No Custermization":custermixeText}</p>
          </div>
        )}
      </div>
    );
  };
  const handleCloseIconClick = () => {
    setIsOrderSelected(false);
  };

  return (
    <div className="kitchen-order-details-kitchen">
      <FontAwesomeIcon
        icon={faClose}
        className="kitchen-order-close-icon"
        onClick={handleCloseIconClick}
      />
      <div>Order Id: {orderId}</div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "80%",
          color: "grey",
          marginBottom: "5%",
        }}
      >
        {dateAndTime}
      </div>
     <div style={{width:"100%",justifyContent:"center", overflowY:"auto", height:"80%"}}>
     {Object.keys(ordersDetails).map((foodKey) => (
        <div key={foodKey} style={{width:"100%",display:"flex",justifyContent:"center"}}>
          <OrderDetails
            foodName={ordersDetails[foodKey].FoodName}
            quantity={ordersDetails[foodKey].Quantity}
            custermixeText={ordersDetails[foodKey].FoodCustomizingText}
          />
        </div>
      ))}
     </div>
    </div>
  );
};
export default OrderDetailsKitchen;
