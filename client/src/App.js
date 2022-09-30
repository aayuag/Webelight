import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Products from './Components/Products'
import Cart from './Components/Cart'

import Product from './Components/Product'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Components/Signup';
import SignIn from './Components/SignIn';
import Protected from './Components/Protected';
import SignProtected from './Components/SignProtected';

function App() {
  return (
    <>
    <Navbar/>
  
     <Routes>
      
      <Route path="/" exact element={<Protected><Home/></Protected>}></Route>
      <Route path="/products" exact element={<Protected><Products/></Protected>}/>
      <Route path="/products/:id"  element={<Protected><Product/></Protected>}/>
      <Route path="/cart" exact element={<Protected><Cart/></Protected>}/>
      <Route path="/signin"  exact element={<SignProtected><SignIn/></SignProtected>}/>
      <Route path="/register"  exact element={<SignProtected><Signup/></SignProtected>}/>

     </Routes>
     
     


    </>
  );
}

export default App;
