import React from 'react';
import './foodComponent.css'; // Import CSS file for styling

const FoodComponent = ({ imageUrl, text }) => {
  return (
    <div className="curved-box">
      <div className="image-container">
        <div className="image-frame">
          <img src={imageUrl} alt="Image" className="image" />
        </div>
      </div>
      <div className="food-text-container">
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

export default FoodComponent;
