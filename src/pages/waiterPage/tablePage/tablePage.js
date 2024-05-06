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
    navigate('/waiter-page/notification-page');
  };
  const data = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8"];
  const data2 = ["Item 11", "Item 22", "Item 33", "Item 44", "Item 55", "Item 66", "Item 77", "Item 88","Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8"];

  return (
    
      <div>
         <div  className="tableHeader" >
            <h1  className='title'>Tables</h1>
            {/* Pass a function to onClick */}
            <FontAwesomeIcon icon={faBell} className="notification-icon" onClick={handleBellIconClick} />
          </div>
          <div>
            <TopTabNavigation onSelectTab={setSelectedTab} />
            {selectedTab === 'Main Floor' && <MainFloor data={data}/>}
            {selectedTab === 'Upper Floor' && <UpperFloor data={data2}/>}
          </div>
      </div>
    
  );
};

export default WaiterTablePage;
