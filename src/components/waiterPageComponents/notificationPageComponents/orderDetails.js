import { View, Text, StyleSheet, } from "react-native";
import React, { useState } from 'react';
import ToggleSwitch from "./toggleSwitch";

const OrderDetailsComponent = ({ id, tableNo, deliverd }) => {
  return (
    <View style={styles.container}>
    <View style={styles.row}>
      <Text style={styles.label}>{id}</Text>
      <Text style={styles.label}>{tableNo}</Text>
     <ToggleSwitch label={id}/>
    </View>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    /*shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    padding: "5%",
    marginBottom: "5%",*/
    padding:"0.5%",
    width: "100%",
    alignSelf: "center",
    textAlign:"center"
  },
  row: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  label: {
    fontWeight: "normal",
    marginRight: 5, // Adjust spacing between label and value as needed
  },
  value: {
    fontWeight: "300",
  },
});

export default OrderDetailsComponent;
