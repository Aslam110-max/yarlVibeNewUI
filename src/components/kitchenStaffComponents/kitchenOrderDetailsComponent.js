import "./kitchenOrderDetailsComponent.css"
import React from 'react';
import StatusButton from "./statusButton";

const KitchenOrderDetailsComponent = ({ id, dateAndTime, setIsOrderSelected,setOrderId,setDateAndTime }) => {
    const handleClick=()=>{
        setIsOrderSelected(preStatus=>{
            if(preStatus){
                return false;
            }else{
                return true;
            }
        });
        setOrderId(id);
        setDateAndTime(dateAndTime);
    }
  return (
    <div  className='kitchen-details-container' onClick={handleClick}>
    <div  className='kitchen-details-row'>
      <div  className='kitchen-details-label'>{id}</div>
      <div className='kitchen-details-label'>{dateAndTime}</div>
     <StatusButton/>
    </div>
</div>
  );
};


export default KitchenOrderDetailsComponent;
