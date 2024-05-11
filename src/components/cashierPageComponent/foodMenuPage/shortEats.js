import FoodComponent from "./foodComponent";

import "./shortEats.css"

const ShortEatsPage=({data,setSelectedFoods})=>{
return (
    <div className="background-container-shortEats">
            <div className="grid-container-shortEats">
            {data.map(menuItem => (
        <FoodComponent menuItem={menuItem} setSelectedFoods={setSelectedFoods}/>
      ))}
    </div>
        </div>
);
}
export default ShortEatsPage;