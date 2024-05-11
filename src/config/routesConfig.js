// routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WaiterTablePage from '../pages/waiterPage/tablePage/tablePage';
import NotificationPage from '../pages/waiterPage/notificationPage/notificationPage';
import LoginPage from '../pages/loginPage/loginPage';
import CashierHomePage from '../pages/cashierPage/cashierHomePage';
import MobileFoodOrderPage from '../components/cashierPageComponent/mobileFoodOrderpPage/mobileFoodOrderPage';
import KitchenStaffPage from '../pages/kitchenStaffPage/kitchenStaffPage';
import App from '../App';
import SelectTablePage from '../components/cashierPageComponent/selectTable/selectTable';

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/waiter-page" element={<WaiterTablePage />} />
        <Route path="/waiter-page/notification-page" element={<NotificationPage />} />
      
        <Route path="/cashier-home-page" element={<CashierHomePage />} />
        <Route path="/cashier-home-page/select-table" element={<SelectTablePage />} />
        <Route path="/cashier-home-page/orders" element={<MobileFoodOrderPage />} />

        <Route path="/kitchen-staff" element={<KitchenStaffPage />} />

        <Route path="/app" element={<App />} />



      </Routes>
    </Router>
  );
};

export default RoutesConfig;
