import React from 'react';
import './tableComponent.css'; // Import CSS for styling
const TableTwoChair=({number})=>{
    return <div >
         <div className='table-twoChairs'>
        <div className='chair-right'> </div>
        <div className='table'>{number}</div>
        <div className='chair-right'> </div>
        </div>
    </div>
       
    
}
const ThreeChair =()=>{
    return <div className='threeChairs'>
    <div className='chair-top'></div>
    <div className='chair-top'></div>
    <div className='chair-top'></div>
</div>
}
const TableComponent = ({ tableNumber }) => {
  return (
    <div className="table-container">
        <div></div>
        <div className='table-setup' style={{scale:"1.3"}}>
           <ThreeChair/>
           <TableTwoChair number={tableNumber}/>
            <ThreeChair/>
        </div>
        <div className='active-line'></div>
      
    </div>
  );
};


export default TableComponent;
