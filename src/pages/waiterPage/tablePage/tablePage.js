// App.js
import React, { useState } from 'react';

import TopTabNavigation from '../../../components/waiterPageComponents/tablePageComponent/topTabNavigation';
import {Dimensions} from "react-native";
import "./tablePage.css"
import MainFloor from '../../../components/waiterPageComponents/tablePageComponent/mainFloor';
import UpperFloor from '../../../components/waiterPageComponents/tablePageComponent/upperFloor';

const WaiterTablePage = () => {
  const [selectedTab, setSelectedTab] = useState('Home');

  return (
    <div>
         <div  className="header" >
            <h1 style={{fontSize:Dimensions.get('window').width<=421?"25px":"40px"}}>Notifications</h1>
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
