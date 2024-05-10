import FoodComponent from "./foodComponent";
import ImagePath from "../../../assets/images/food1.jpg"
import "./mainCourse.css"

const MainCoursePage=({data})=>{
return (
    <div className="background-container-mainCourse">
            <div className="grid-container-mainCourse">
      {data.map(table => (
        <FoodComponent imageUrl={ImagePath} text={table.tableCode} key={table.tableCode}/>
      ))}
    </div>
        </div>
);
}
export default MainCoursePage;