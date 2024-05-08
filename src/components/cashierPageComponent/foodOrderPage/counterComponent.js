import React, { useState } from 'react';
import './counterComponent.css'; // Import CSS file

const CounterComponent = ({setSubTotalPrice, setTotalPrice, price}) => {
  const [count, setCount] = useState(1);

  const incrementCounter = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      setSubTotalPrice(price * newCount); // Update price based on the new count
      return newCount; // Return the updated count
    });
    setTotalPrice(prevTotal => {
        const newTotal = prevTotal + price;
        return newTotal; 
      });
  };
  

  const decrementCounter = () => {
    setCount(prevCount => {
      const newCount = prevCount === 0 ? 0 : prevCount - 1;
      setSubTotalPrice(price * newCount); // Update price based on the new count
      return newCount; // Return the updated count
    });
    setTotalPrice(prevTotal => {
        const newTotal = prevTotal - price;
        return newTotal; 
      });
  };
  

  return (
    <div className="counter-container">
      <button id="decrementButton" className="counter-button" onClick={decrementCounter}>-</button>
      <p className="counter">{count}</p>
      <button id="incrementButton" className="counter-button" onClick={incrementCounter}>+</button>
    </div>
  );
};

export default CounterComponent;
