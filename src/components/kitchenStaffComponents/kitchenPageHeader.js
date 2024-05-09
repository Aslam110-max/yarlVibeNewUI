import { useState } from "react";
import KitchenStaffSearchBar from "./kitchenStaffSearchBar";

const KitchenPageHeader=()=>{
    const [searchText, setSearchText] = useState("");
    return (
        <div  className="kitchen-page-header" >
            <h1 className="kitchen-page-title">Orders</h1>
            <KitchenStaffSearchBar setSearchText={setSearchText}/>
          </div>
    );
}
export default KitchenPageHeader;