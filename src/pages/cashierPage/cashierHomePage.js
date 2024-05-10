import React,{useEffect, useState} from "react";
import CashierSearchBar from "../../components/cashierPageComponent/header/searchBar";
import FoodMenu from "../../components/cashierPageComponent/foodMenuPage/foodMenu";
import FoodOrder from "../../components/cashierPageComponent/foodOrderPage/foodOrderPage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'
import "./cashierHomePage.css";

const API_URL ="http://localhost:5136/";
const CashierHomePage =()=>{
  // Calling Api
  const [dataFloor0, setDataFloor0] = useState([]);
  const [dataFloor1, setDataFloor1] = useState([]);
  const refreshData = async () => {
  try {
    const response = await fetch(API_URL + "api/YarlVibe/GetData");
    const data = await response.json();
    

    const floor0 = data.filter(item => item.FloorID === 0);
    const floor1 = data.filter(item => item.FloorID === 1);

    setDataFloor0(floor0);
    setDataFloor1(floor1);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

useEffect(() => {
  refreshData();
}, []);


/////////////////////////////////
    const navigate = useNavigate();
    const handleCartIconClick = () => {
        navigate('/cashier-home-page/orders');
      };
    const [searchText, setSearchText] = useState("");
    return(
        <div className="homePage">
            <div  className="header-cashier" >
            <div className="header-mobile">
            <h1 className="title-cashier">Yarl Vibe</h1>
           <FontAwesomeIcon icon={faCartShopping} className="cart-icon" onClick={handleCartIconClick} />
            </div>
            <CashierSearchBar setSearchText={setSearchText}/>
          </div>
          <div className="menu-row-cashier">
                <FoodMenu dataFloor0={dataFloor0} dataFloor1={dataFloor1}/>
                <FoodOrder/>
                
          </div>
        </div>
    );
    
}
export default CashierHomePage;