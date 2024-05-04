import React from 'react';
import ReactDOM from 'react-dom';
import NotificationPage from "./pages/waiterPage/notificationPage/notificationPage";
import {SafeAreaView} from "react-native";
import WaiterTablePage from './pages/waiterPage/tablePage/tablePage';

ReactDOM.render(
  <React.StrictMode>
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F7F7F7" }}>
      <WaiterTablePage/>
    </SafeAreaView>
    
  </React.StrictMode>,
  document.getElementById('root')
);