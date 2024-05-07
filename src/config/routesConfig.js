// routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WaiterTablePage from '../pages/waiterPage/tablePage/tablePage';
import NotificationPage from '../pages/waiterPage/notificationPage/notificationPage';
import LoginPage from '../pages/loginPage/loginPage';
import CashierHomePage from '../pages/cashierPage/cashierHomePage';

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/waiter-page" element={<WaiterTablePage />} />
        <Route path="/waiter-page/notification-page" element={<NotificationPage />} />
        
        <Route path="/cashier-home-page" element={<CashierHomePage />} />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
