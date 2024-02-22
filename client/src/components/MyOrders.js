import React from 'react'
import { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import UserNavbar from './UserNavbar';
import UserBottonNavBar from './UserBottomNavBar';
function MyOrders(){
    const[dataList,setDataList] = useState([]);
    
    const [userId,setUserId]=useState(localStorage.getItem("userId"));
    useEffect(()=>{
    //const user= localStorage.getItem("userId");
    if(userId==="")
    {
      window.location.href="/Login";
    }
   
  
    const getFetchData = async()=>{
      const data = await axios.get("/orderbyuser/"+userId)
      //console.log(data);
      if(data.data.success){
        setDataList(data.data.data)
        
      }
  
    }
   
    getFetchData();

  },[]);
  
    

//console.log(dataList);
    return(
        <>
<UserNavbar/>
<div className="hero-section hero-background">
        <h1 className="page-title">Organic Fruits</h1>
    </div>

    <div className="container">
        <nav className="biolife-nav">
            <ul>
                <li className="nav-item"><a href="/" className="permal-link">Home</a></li>
                <li className="nav-item"><span className="current-page">My Orders</span></li>
            </ul>
        </nav>
    </div>
<div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cart</th>
              <th>Address1/Pincode</th>
              <th>Mobile</th>          
              <th>Total Payment</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {
              dataList ? (
              dataList.map((el)=>{
                //console.log(el.cart);
                return (
                    <tr>
                      <td>{el.name}</td>
                      <td>
                        {
                            <table><thead>
                            <tr>
                              <th>Product Name</th>
                              <th>Cost</th>
                              <th>Quantity</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                                
                                el.cart?.map((c)=>{
                                return (
                                    
                                <tr>
                                    <td>{c.name}</td>  
                                    <td>{c.cost}</td>  
                                    <td>{c.quantity}</td>    
                                </tr>     
                                )
                                })
                            }
                            </tbody>
                             </table>
                        }
                      </td>
                      <td>{el.address1}/{el.pincode}</td>
                      <td>{el.mobile}</td>
                      <td>{el.totalpayment}</td>
                      <td>{el.orderstatus}</td>
                    </tr>

                )
              }))
              : 
              (<p style={{"textAlign": "center"}}>No data</p>)
            }
          </tbody>
        </table>
        </div> 
        <UserBottonNavBar/>       
        </>
    )
}
export default MyOrders;