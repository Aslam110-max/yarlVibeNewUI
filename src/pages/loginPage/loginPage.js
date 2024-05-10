import React from 'react';
import './loginPage.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';


const Button = ({ color, text, onPressed }) => {
  return (
    <button className="custom-button" style={{ backgroundColor: color }} onClick={onPressed}>
      {text}
    </button>
  );
};

const LoginPage = () => {
    const navigate = useNavigate();
    const handleButton1Click = () => {
        navigate('/waiter-page');
      };
      const handleButton2Click = () => {
        navigate('/cashier-home-page');
      };
      
      const handleButton3Click = () => {
        navigate('/kitchen-staff');
      };
      const handleButton4Click = () => {
        navigate('/app');
      };
    
  return (
    <div className="centered">
      <Button color="#ff5733" text="Button 1" onPressed={handleButton1Click} />
      <Button color="#33ff57" text="Button 2" onPressed={handleButton2Click}/>
      <Button color="#5733ff" text="Button 3" onPressed={handleButton3Click} />
      <Button color="#33ffff" text="Button 4" onPressed={handleButton4Click} />
      <Button color="#ffff33" text="Button 5" />
    </div>
  );
};

export default LoginPage;
