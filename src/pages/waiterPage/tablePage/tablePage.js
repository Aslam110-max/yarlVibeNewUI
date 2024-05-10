// App.js
import React, { useEffect, useState } from 'react';
import TopTabNavigation from '../../../components/waiterPageComponents/tablePageComponent/topTabNavigation';

import "./tablePage.css"
import MainFloor from '../../../components/waiterPageComponents/tablePageComponent/mainFloor';
import UpperFloor from '../../../components/waiterPageComponents/tablePageComponent/upperFloor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const API_URL ="http://localhost:5136/";
const WaiterTablePage = () => {
  //Calling Api
  const [dataFloor0, setDataFloor0] = useState([]);
  const [dataFloor1, setDataFloor1] = useState([]);
  const refreshData = async () => {
  try {
    const response = await fetch(API_URL + "GetData");
    const data = await response.json();
    

    const floor0 = data.filter(item => item.FloorID === 0);
    const floor1 = data.filter(item => item.FloorID === 1);

    setDataFloor0(floor0);
    setDataFloor1(floor1);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

useEffect(() => {
  refreshData();
}, []);

const updateTableStatusFloor0 = ( TableCode, newStatus) => {
  const updatedDataFloor0 = dataFloor0.map(table => {
    if (table.TableCode === TableCode) {
      return { ...table, TableStatus: newStatus };
    }
    return table;
  });
  setDataFloor0(updatedDataFloor0);
};
const updateTableStatusFloor1 = ( TableCode, newStatus) => {
  const updatedDataFloor0 = dataFloor1.map(table => {
    if (table.TableCode === TableCode) {
      return { ...table, TableStatus: newStatus };
    }
    return table;
  });
  setDataFloor0(updatedDataFloor0);
};
  //////////////////
  const [selectedTab, setSelectedTab] = useState('Main Floor');
  const navigate = useNavigate();
  const handleBellIconClick = () => {
    navigate('/waiter-page/notification-page');
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
            {selectedTab === 'Main Floor' && <MainFloor data={dataFloor0} updateTableStatus={updateTableStatusFloor0}/>}
            {selectedTab === 'Upper Floor' && <UpperFloor data={dataFloor1} updateTableStatus={updateTableStatusFloor1}/>}
          </div>
      </div>
    
  );
};

export default WaiterTablePage;
