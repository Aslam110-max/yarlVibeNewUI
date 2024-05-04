import "./toggleSwitch.css";
import React, { useState } from 'react';

 
const ToggleSwitch = ({label}) => {
  const [isChecked, setIsChecked] = useState(false);
      const handleToggle = () => {
        
        const confirmToggle = window.confirm('Are you sure you want to toggle?');
        if (confirmToggle) {
          setIsChecked(!isChecked);
          console.log(label);
        } else {
          //document.getElementById('checkbox').checked = false;
        }
      };
 

  return (
    <div className="container"  >
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox"
               name={label} id={label} onClick={handleToggle} checked={isChecked}/>
        <label className="label" htmlFor={label} >
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
     
      
    </div>
  );
};
 
export default ToggleSwitch;