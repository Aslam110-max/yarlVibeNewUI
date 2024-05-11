
import React,{useState} from "react";
import "./foodMenu.css"
import TopTabNavigationCashier from "../header/topTabNavigation";
import ShortEatsPage from "./shortEats";
import MainCoursePage from "./mainCourse";


const FoodMenu=({seMenu,mcMenu,setSelectedFoods})=>{
    const [selectedTab, setSelectedTab] = useState('Short Eats');
return (
   <div className="foodMenu">
    <TopTabNavigationCashier onSelectTab={setSelectedTab}/>
    {selectedTab === 'Short Eats' && <ShortEatsPage data={seMenu} setSelectedFoods={setSelectedFoods}/>}
    {selectedTab === 'Main Course' && <MainCoursePage data={mcMenu} setSelectedFoods={setSelectedFoods}/>}
   </div>
);
}
export default FoodMenu;