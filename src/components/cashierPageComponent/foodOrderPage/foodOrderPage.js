import React from 'react';
import './foodOrderPage.css'; // Import CSS file for styling

const FoodOrder = ({ rows }) => {
  return (
    <div className="text-container">
      {rows.map((row, index) => (
        <p key={index} className="text-row">
          {row}
        </p>
      ))}
    </div>
  );
};

export default FoodOrder;
