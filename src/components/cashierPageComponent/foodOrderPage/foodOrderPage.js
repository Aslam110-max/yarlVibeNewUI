import React, { useState,useEffect } from 'react';
import './foodOrderPage.css'; // Import CSS file for styling
import CounterComponent from './counterComponent';
import FoodOrderDetails from './foodOrderDetails';
import BillComponent from './billComponent';

const FoodOrder = () => {
  const foods = {
    food1:{
      "price":20,
      "name":"food1"
    },
    food2:{
      "price":50,
      "name":"food2"
    },
    food3:{
      "price":120,
      "name":"food3"
    }
  }
  let total =0;
  useEffect(() => {
    Object.keys(foods).map(foodKey=>(
      total =total+foods[foodKey].price
    ));
    setTotalPrice(total);
  }, []);
  const [totalPrice,setTotalPrice] = useState(0);
  const TabButton = ({ color, text, onPressed, width }) => {
    return (
      <button className="custom-button-cashier" style={{ backgroundColor: color, width:width }} onClick={onPressed}>
        {text}
      </button>
    );
  };
  return (
    <div className="order-main-container">
      <TabButton color={"rgb(193, 64, 0)"} text={"Select Table"} onPressed={{}} width={"80%"}/>
        <div className='food-order-details' >
        {Object.keys(foods).map(foodKey=>(
          <div style={{display:"flex",justifyContent:"center",width:"100%"}}>
            <FoodOrderDetails foodName = {foods[foodKey].name} price={foods[foodKey].price} key={foodKey} setTotalPrice={setTotalPrice}/>
          </div>
        ))}
        </div>
      <BillComponent totalPrice={totalPrice}/>
      <TabButton color={"green"} text={"Proceed"} onPressed={{}} width={"80%"}/>
    </div>
  );
};

export default FoodOrder;
