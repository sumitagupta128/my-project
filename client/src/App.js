//import logo from './logo.svg';
import React from 'react';
import './App.css';
import AdminHome from "./components/AdminHome";
import AdminLogin from "./components/AdminLogin";
import AdminProducts from "./components/AdminProducts";
import AdminOrders from "./components/AdminOrders";
import Users from "./components/Users";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart.js";
import {BrowserRouter as Router, Routes, Route, Link,useNavigate} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {useState,useEffect} from 'react';
import AdminSideNav from './components/AdminSideNav.js';
import Products from './components/Products';
import MyProfile from './components/MyProfile';
import MyOrders from './components/MyOrders';
import Shipping from './components/Shipping';
import Contact from './components/Contact';
import PaytmGatewayResponse from './components/PaytmGatewayResponse.js';
import AboutUs from './components/AboutUs.js';
import WishlistCart from './components/WishlistCart.js';
import AdminCategory from './components/AdminCategory.js';
import Home from './components/Home.js';
import ProductDetails from './components/ProductDetails.js';
function App() {
  const [isAdmin, setAdmin]=useState("");
  //const history= useNavigate();
  useEffect(()=>{
      const userInfo= localStorage.getItem("userInfo");
      if(userInfo!=null)
        {
            //console.log(userInfo);
            const u=JSON.parse(userInfo);
            if(u!=null && u.isAdmin)
            {
              //console.log(u.isAdmin)
              setAdmin(u.isAdmin);
                //history("/Admin/AdminLogin")
              //console.log(isAdmin)      
            }
            else
            {
              setAdmin(false);
            }
        }
        else{
          setAdmin(false);
            //history("/Admin/AdminLogin")   
        }
      },[]);
      //console.log(isAdmin)
  return(


<div className='App'>

  <Router>
    <>
    {isAdmin && 
      <AdminSideNav/>    
    }
    
  </>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Products" element={<Products />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/MyProfile" element={<MyProfile/>}/>
      <Route path="/MyOrders" element={<MyOrders/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/WishlistCart" element={<WishlistCart/>}/>
      <Route path="/Shipping" element={<Shipping/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Product/:id" element={<ProductDetails/>}/>
      <Route path="/PaytmGatewayResponse" element={<PaytmGatewayResponse/>}/>

      <Route path="/Admin/" element={<AdminLogin/>}/>
      <Route path="/Admin/AdminLogin" element={<AdminLogin/>}/>
      <Route path="/Admin/Users" element={<Users/>}/>
      {/*<Route path="/Admin/AdminCategory" element={<AdminCategory/>}/>*/}
      <Route path="/Admin/AdminHome" element={<AdminHome/>}/>
      <Route path="/Admin/AdminProducts" element={<AdminProducts/>}/>
      <Route path="/Admin/AdminOrders" element={<AdminOrders/>}/>
    </Routes>
  </Router>
</div>


  )
  
}

export default App