
import React,{useState} from "react";
import "./foodMenu.css"
import TopTabNavigationCashier from "../header/topTabNavigation";
import ShortEatsPage from "./shortEats";
import MainCoursePage from "./mainCourse";


const FoodMenu=({dataFloor0,dataFloor1})=>{
    const [selectedTab, setSelectedTab] = useState('Short Eats');
return (
   <div className="foodMenu">
    <TopTabNavigationCashier onSelectTab={setSelectedTab}/>
    {selectedTab === 'Short Eats' && <ShortEatsPage data={dataFloor0}/>}
    {selectedTab === 'Main Course' && <MainCoursePage data={dataFloor1}/>}
   </div>
);
}
export default FoodMenu;