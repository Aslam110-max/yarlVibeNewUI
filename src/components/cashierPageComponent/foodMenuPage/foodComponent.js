import React from 'react';
import './foodComponent.css'; // Import CSS file for styling
import MobileFoodOrderCounter from './mobileFoodMenuCounter';
import imageUrl from "../../../assets/images/food1.jpg"

const FoodComponent = ({ menuItem, setSelectedFoods}) => {
  const handleClick=()=>{
    const newFood = { name: menuItem.MenuName, quantity: 1, price: menuItem.Price,custermizeText:"",singlePrice:menuItem.Price};
    
    setSelectedFoods(selectedFoods=>{
      const foodNameExists = selectedFoods.find(food => food.name === newFood.name);
      if(!foodNameExists){
        return [...selectedFoods, newFood]
      }else{
        return selectedFoods;
      }
    });
  }
  const AddButton = () => {
    return (
      <button className="add-food-button"  onClick={{}}>
        Add
      </button>
    );
  };
  return (
    <div className="curved-box" onClick={handleClick} style={{cursor:"pointer"}}>
      <div className="image-container">
        <div className="image-frame">
          <img src={imageUrl} alt="Image" className="image" />
        </div>
      </div>
      <div className="food-text-container">
        <p className="text">{menuItem.MenuName}</p>
        <p className="text">Rs.{menuItem.Price}</p>
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
