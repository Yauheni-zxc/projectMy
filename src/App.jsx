
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Oplata from "./components/Oplata/Oplata";
import Favorites from "./components/Magazine/Magazine";
import Contacts from "./components/Contacts/Contacts";
import Basket from "./components/Basket/Basket";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import LayoutHeader from "./components/LayoutHeader/LayoutHeader";



function App() {
  
 
  const isDarkMode = useSelector(state => state.themes.isDarkTheme);
  return (
    <div  style={{
      backgroundColor: isDarkMode ? '#333' : 'white',
      color: isDarkMode ? 'white' : '#333',
      minHeight: '100vh',
     
      transition: 'background-color 0.3s, color 0.3s',
    }}>
     
 
 
   
      
      <Routes>
      <Route path="/" element={< LayoutHeader/>}>
     

<Route path="Favorites" element={<Favorites />} />
<Route path="Oplata" element={<Oplata />} />
<Route path="Contacts" element={<Contacts />} />
<Route path="/" element={<Layout />}></Route> 
<Route path="Basket" element={<Basket />} /></Route> 
       

       
       

        <Route path="/Login" element={<Login />} />
        
      </Routes>
    
    </div>
  );
}

export default App;
