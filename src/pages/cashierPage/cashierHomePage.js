import React,{useState} from "react";
import CashierSearchBar from "../../components/cashierPageComponent/header/searchBar";
import FoodMenu from "../../components/cashierPageComponent/foodMenuPage/foodMenu";
import FoodOrder from "../../components/cashierPageComponent/foodOrderPage/foodOrderPage";
import "./cashierHomePage.css";
const CashierHomePage =()=>{
    const data = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8"];
    const [searchText, setSearchText] = useState("");
    const textRows = [
        "This is the first row of text.",
        "This is the second row of text.",
        "And this is the third row of text.",
        "You can add more rows as needed."
      ];
    return(
        <div className="homePage">
            <div  className="header-cashier" >
            <h1 className="title-cashier">Yarl Vibe</h1>
            <CashierSearchBar setSearchText={setSearchText}/>
          </div>
          <div className="menu-row-cashier">
                <FoodMenu />
                <FoodOrder rows = {textRows}/>
                
          </div>
        </div>
    );
    
}
export default CashierHomePage;