import './App.css';
import React, {  useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GlobelContext from './GlobalContext/GlobalContext';
import MyCart from './pages/MyCart';
import ShowPopup from './pages/ShowPopup';
function App()
{
    const [cartValue, setCartValue] = useState([]);
    const [showPopupBox, setShowPopupBox] = useState("");

    const ClosePopupBox = (props) => {
         setShowPopupBox("");
    }

   /* Create Global Store Who Manage Our Global State*/
    const  StoreDbContext = {
        cartValue: cartValue,
        setCartValue: setCartValue,
        setShowPopupBox: setShowPopupBox,
        ClosePopup: ClosePopupBox,

        }
  return (
      <>  
          <GlobelContext.Provider value={StoreDbContext}>
              {showPopupBox}  
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route index element={<HomePage />} />
                  <Route path="/Cart" element={<MyCart />} />
                  <Route path="/ShowPopup" element={<ShowPopup />} />
              </Routes>
              </BrowserRouter>
          </GlobelContext.Provider>
      </>   
  );
}

export default App;
