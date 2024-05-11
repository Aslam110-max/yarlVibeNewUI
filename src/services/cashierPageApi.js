

const API_URL ="http://localhost:5136/";
export const getMenuDetails = async ({setSEMenuData, setMCMenuData}) => {
    try {
      const response = await fetch(API_URL + "GetMenuData");
      const data = await response.json();
      
  
      const seMenu = data.filter(item => item.KitchenID === 0);
      const mcMenu = data.filter(item => item.KitchenID === 1);
  
      setSEMenuData(seMenu);
      setMCMenuData(mcMenu);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  