// App.js
import React, { useState } from 'react';
import TopTabNavigation from '../../../components/waiterPageComponents/tablePageComponent/topTabNavigation';

import "./tablePage.css"
import MainFloor from '../../../components/waiterPageComponents/tablePageComponent/mainFloor';
import UpperFloor from '../../../components/waiterPageComponents/tablePageComponent/upperFloor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import NotificationPage from '../notificationPage/notificationPage';
import { useNavigate } from 'react-router-dom';

const WaiterTablePage = () => {
  const [selectedTab, setSelectedTab] = useState('Main Floor');
  const navigate = useNavigate();

  const handleBellIconClick = () => {
    navigate('/notification-page');
  };
  
  return (
    
      <div>
         <div  className="tableHeader" >
            <h1  className='title'>Tables</h1>
            {/* Pass a function to onClick */}
            <FontAwesomeIcon icon={faBell} className="notification-icon" onClick={handleBellIconClick} />
          </div>
          <div>
            <TopTabNavigation onSelectTab={setSelectedTab} />
            {selectedTab === 'Main Floor' && <MainFloor/>}
            {selectedTab === 'Upper Floor' && <UpperFloor/>}
          </div>
      </div>
    
  );
};

export default WaiterTablePage;
