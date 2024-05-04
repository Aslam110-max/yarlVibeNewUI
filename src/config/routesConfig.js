// routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WaiterTablePage from '../pages/waiterPage/tablePage/tablePage';
import NotificationPage from '../pages/waiterPage/notificationPage/notificationPage';

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WaiterTablePage />} />
        <Route path="/notification-page" element={<NotificationPage />} />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
