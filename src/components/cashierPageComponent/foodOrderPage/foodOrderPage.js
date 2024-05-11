import React, { useState, useEffect } from "react";
import "./foodOrderPage.css"; // Import CSS file for styling
import CounterComponent from "./counterComponent";
import FoodOrderDetails from "./foodOrderDetails";
import BillComponent from "./billComponent";



const FoodOrder = ({ foods, setSelectedFoods, setIsShowTable, selectedTable }) => {
  let total = 0;
  
  const handleSelectTableClick = () => {
    setIsShowTable(true)
  };
  useEffect(() => {
    Object.keys(foods).map((foodKey) => (total = total + foods[foodKey].price));
    setTotalPrice(total);
  }, [foods.length]);
  const [totalPrice, setTotalPrice] = useState(0);
  const TabButton = ({ color, text, onPressed, width }) => {
    return (
      <button
        className="custom-button-cashier"
        style={{ backgroundColor: color, width: width }}
        onClick={onPressed}
      >
        {text}
      </button>
    );
  };
  return (
    <div className="order-main-container">
      <TabButton
        color={"rgb(193, 64, 0)"}
        text={selectedTable===""?"Select Table":selectedTable}
        onPressed={handleSelectTableClick}
        width={"80%"}
      />
      <div className="food-order-details">
        {foods.length === 0 ? (
          <div style={{
            display: "flex",
            justifyContent: "center",
            color:"grey",
            width: "100%",
          }}>Select Any Food</div>
        ) : (
          Object.keys(foods).map((foodKey) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
              key={foodKey}
            >
              <FoodOrderDetails
                foodName={foods[foodKey].name}
                price={foods[foodKey].price}
                singlePrice={foods[foodKey].singlePrice}
                quantity={foods[foodKey].quantity}
                custermizeText={foods[foodKey].custermizeText}
                uKey={foodKey}
                setSelectedFoods={setSelectedFoods}
                setTotalPrice={setTotalPrice}
              />
            </div>
          ))
        )}
      </div>
      <BillComponent totalPrice={totalPrice} />
      <TabButton
        color={"green"}
        text={"Proceed"}
        onPressed={{}}
        width={"80%"}
      />
    </div>
  );
};

export default FoodOrder;
