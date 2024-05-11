import FoodComponent from "./foodComponent";

import "./mainCourse.css"

const MainCoursePage=({data,setSelectedFoods})=>{
return (
    <div className="background-container-mainCourse">
            <div className="grid-container-mainCourse">
            {data.map(menuItem => (
        <FoodComponent menuItem={menuItem} setSelectedFoods={setSelectedFoods}/>
      ))}
    </div>
        </div>
);
}
export default MainCoursePage;