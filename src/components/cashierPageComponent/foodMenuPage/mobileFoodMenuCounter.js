import React, { useState } from 'react';
import './mobileFoodOrderCounter.css'; // Import CSS file

const MobileFoodOrderCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      //setSubTotalPrice(price * newCount); // Update price based on the new count
      return newCount; // Return the updated count
    });
    /*setTotalPrice(prevTotal => {
        const newTotal = prevTotal + price;
        return newTotal; 
      });*/
  };
  

  const decrementCounter = () => {
    setCount(prevCount => {
      const newCount = prevCount === 0 ? 0 : prevCount - 1;
      //setSubTotalPrice(price * newCount); // Update price based on the new count
      return newCount; // Return the updated count
    });
    /*setTotalPrice(prevTotal => {
        const newTotal = prevTotal - price;
        return newTotal; 
      });*/
  };
  

  return (
    <div className="mobile-counter-container">
      <button id="decrementButton" className="mobile-counter-button" onClick={decrementCounter}>-</button>
      <p className="mobile-counter">{count}</p>
      <button id="incrementButton" className="mobile-counter-button" onClick={incrementCounter}>+</button>
    </div>
  );
};

export default MobileFoodOrderCounter;
