
import React,{useState} from "react";
import "./foodMenu.css"
import TopTabNavigationCashier from "../header/topTabNavigation";
import ShortEatsPage from "./shortEats";
import MainCoursePage from "./mainCourse";


const FoodMenu=()=>{
    const [selectedTab, setSelectedTab] = useState('Short Eats');
    const data = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8"];
    const data2 = ["Item 11", "Item 22", "Item 33", "Item 44", "Item 55", "Item 66", "Item 77", "Item 88","Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8"];
return (
   <div className="foodMenu">
    <TopTabNavigationCashier onSelectTab={setSelectedTab}/>
    {selectedTab === 'Short Eats' && <ShortEatsPage data={data}/>}
    {selectedTab === 'Main Course' && <MainCoursePage data={data2}/>}
   </div>
);
}
export default FoodMenu;