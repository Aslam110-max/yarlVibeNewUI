import React from 'react';
import './foodComponent.css'; // Import CSS file for styling
import MobileFoodOrderCounter from './mobileFoodMenuCounter';

const FoodComponent = ({ imageUrl, text }) => {
  const AddButton = () => {
    return (
      <button className="add-food-button"  onClick={{}}>
        Add
      </button>
    );
  };
  return (
    <div className="curved-box">
      <div className="image-container">
        <div className="image-frame">
          <img src={imageUrl} alt="Image" className="image" />
        </div>
      </div>
      <div className="food-text-container">
        <p className="text">{text}</p>
        <p className="text">price</p>
        <div style={{display:"flex",justifyContent:"center"}}>
        <MobileFoodOrderCounter/>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
        <AddButton/>
        </div>
      </div>
    </div>
  );
};

export default FoodComponent;
