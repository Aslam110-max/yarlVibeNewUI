import React,{useState} from "react";
import CashierSearchBar from "../../components/cashierPageComponent/header/searchBar";
import FoodMenu from "../../components/cashierPageComponent/foodMenuPage/foodMenu";
import FoodOrder from "../../components/cashierPageComponent/foodOrderPage/foodOrderPage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'
import "./cashierHomePage.css";
const CashierHomePage =()=>{
    const navigate = useNavigate();

    const handleCartIconClick = () => {
        navigate('/waiter-page/notification-page');
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
                <FoodMenu />
                <FoodOrder/>
                
          </div>
        </div>
    );
    
}
export default CashierHomePage;