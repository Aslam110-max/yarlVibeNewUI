import "./orderDetails.css"
import React from 'react';
import ToggleSwitch from "./toggleSwitch";

const OrderDetailsComponent = ({ id, tableNo, deliverd }) => {
  return (
    <div  className='details-container'>
    <div  className='details-row'>
      <div  className='details-label'>{id}</div>
      <div className='details-label'>{tableNo}</div>
     <ToggleSwitch label={id}/>
    </div>
</div>
  );
};


export default OrderDetailsComponent;
