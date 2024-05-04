import {  StyleSheet, Dimensions} from "react-native";
import React,{useState} from "react";
import OrderDetailsComponent from "../../../components/waiterPageComponents/notificationPageComponents/orderDetails";
import SearchBar from "../../../components/waiterPageComponents/notificationPageComponents/searchBar";
import "./notificationPage.css"
export default function NotificationPage(){
  const [searchText, setSearchText] = useState("");
    const data = [];

for (let i = 1; i <= 100; i++) {
  data.push({ id: i });
}
    return (
        <div>
          <div  className="header" >
            <h1 className="title">Notifications</h1>
            <SearchBar setSearchText={setSearchText}/>
          </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <div  className="titleContainer">
            <div  className="row">
              <div  className="label">OrderID</div>
              <div  className="label">Table Number</div>
              <div className="label">Delivered</div>
            </div>
        </div>
        </div>
       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
       <div   className="detailsContainer">
      {(data.map((dataItem)=>
       <div key={dataItem.id.toString()}>
        {("#2334"+dataItem.id.toString().toLowerCase()).includes(searchText.toLowerCase())?
        <OrderDetailsComponent id={"#2334"+dataItem.id.toString()} tableNo={"UF-T 03"} deliverd={true}/>:<div></div>}
        
        <div style={{ marginBottom: '0.3%' }} /> 
       </div>
      ))}
      
        </div>
       </div>
        </div>
  
  
            );
}
const styles = StyleSheet.create({
    titleContainer: {
      borderRadius: 10,
      backgroundColor: "#e1e1e1",
      /*shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,*/
      elevation: 5,
      padding: "1%",
      //marginBottom: "5%",
      width: "90%",
      alignSelf: "center",
    },
    detailsContainer: {
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
        height:"100%",
        elevation: 5,
        padding: "1%",
        width: "90%",
        alignSelf: "center",
      },
    
    row: {
      justifyContent: "space-between",
      flexDirection: "row",
      //marginBottom: 10, // Adjust spacing between rows as needed
    },
    header:{
      paddingRight:Dimensions.get('window').width<=421?"0":"5%",
      paddingLeft:Dimensions.get('window').width<=421?"0":"5%",
      justifyContent:Dimensions.get('window').width<=421?"center": "space-between",
      flexDirection: Dimensions.get('window').width<=421?"column": "row",
    },
    label: {
        fontSize:"15px",
      fontWeight: "bold",
      marginRight: 5, // Adjust spacing between label and value as needed
    },
    
  });
  