

import Context from "./Context/Context"; 
import ContactUs from "./Pages/ContactUs/ContactUs";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { useState } from "react";
import ProductPage from "./Pages/Product/ProductPage";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import HomePage from "./Pages/HomePage/HomePage";
import AboutUs from "./Pages/AboutUs/AboutUs";




const App = () => {
  const [login, setLogin] = useState(false);

  return (
    <>
      <Context.Provider value={{ login, setLogin }}>
       
        <BrowserRouter>

          <Routes >
              <Route path='/' element = {<HomePage />} />
              <Route path='/About' element = {<AboutUs />} />
              <Route path='/Login' element = {<LoginPage />} />
              <Route path = '/Contact' element = {<ContactUs />} />
               <Route path = '/Product' element = {<ProductPage />} />
              
           </Routes>
         </BrowserRouter>
      </Context.Provider>
   
    </>
  );
};

export default App;
