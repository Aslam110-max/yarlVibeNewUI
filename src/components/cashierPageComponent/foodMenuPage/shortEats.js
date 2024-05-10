import FoodComponent from "./foodComponent";
import ImagePath from "../../../assets/images/food1.jpg"
import "./shortEats.css"

const ShortEatsPage=({data})=>{
return (
    <div className="background-container-shortEats">
            <div className="grid-container-shortEats">
            {data.map(table => (
        <FoodComponent imageUrl={ImagePath} text={table.tableCode} key={table.tableCode}/>
      ))}
    </div>
        </div>
);
}
export default ShortEatsPage;