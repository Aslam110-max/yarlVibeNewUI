import { useState } from "react";
import KitchenOrderDetailsComponent from "../../components/kitchenStaffComponents/kitchenOrderDetailsComponent";
import KitchenPageHeader from "../../components/kitchenStaffComponents/kitchenPageHeader";
import "./kitchenStaffPage.css"
import OrderDetailsKitchen from "../../components/kitchenStaffComponents/orderDetailsKitchen";
const KitchenStaffPage=()=>{
    const [orderId, setOrderId] = useState("");
    const [dateAndTime, setDateAndTime] = useState("");
    const [searchText, setSearchText] = useState("");
    const [isOrderSelected,setIsOrderSelected] = useState(false);
    const data=[];


for (let i = 1; i <= 100; i++) {
  data.push({ id: i });
}
    return (
       
            <div >
            <KitchenPageHeader setSearchText={setSearchText}/>
            <div style={{display:"flex", width:"100%",justifyContent:"space-between"}}>
            <div style={{width:"100%"}}>
            <div className={`kitchen-titles`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
        <div  className="kitchen-page-titleContainer">
            <div  className="kitchen-page-row">
              <div  className="kitchen-page-label">OrderID</div>
              <div  className="kitchen-page-label">Date and Time</div>
              <div className="kitchen-page-label">Status</div>
            </div>
        </div>
        </div>
        <div className='kitchen-order-details'>
       <div   className="detailsContainer">
      {(data.map((dataItem)=>
       <div key={dataItem.id.toString()}>
        {("#2334"+dataItem.id.toString().toLowerCase()).includes(searchText.toLowerCase())?
        <KitchenOrderDetailsComponent id={"#2334"+dataItem.id.toString()} dateAndTime={"UF-T 03"} setIsOrderSelected={setIsOrderSelected} setOrderId={setOrderId} setDateAndTime={setDateAndTime}/>:<div></div>}
        <div style={{ marginBottom: '0.3%' }} /> 
       </div>
      ))}
        </div>
       </div>
            </div>
       {isOrderSelected&& <OrderDetailsKitchen orderId={orderId} dateAndTime={dateAndTime}/>}
            </div>
        </div>
       
       
    )
}
export default KitchenStaffPage;