import React from 'react';
import {createRoot} from 'react-dom/client';
import {SafeAreaView} from "react-native";
import RoutesConfig from './config/routesConfig';

createRoot(document.getElementById('root')).render(
  <SafeAreaView style={{ flex: 1, backgroundColor: "#F7F7F7" }} >
    <RoutesConfig />
    </SafeAreaView>
);
