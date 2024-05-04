import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NotificationPage from "./pages/waiterPage/notificationPage/notificationPage";
import {SafeAreaView} from "react-native";
import WaiterTablePage from './pages/waiterPage/tablePage/tablePage';
import RoutesConfig from './config/routesConfig';

ReactDOM.render(
  <React.StrictMode>
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F7F7F7" }}>
    <RoutesConfig />
    </SafeAreaView>
    
  </React.StrictMode>,
  document.getElementById('root')
);