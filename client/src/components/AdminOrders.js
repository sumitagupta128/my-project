import React from 'react'
import { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import {useNavigate } from "react-router-dom"

function AdminOrders(){
  const history= useNavigate();
  useEffect(()=>{
      const userInfo= localStorage.getItem("userInfo");
      if(userInfo!=null)
        {
            //console.log(userInfo);
            const u=JSON.parse(userInfo);
            if(u!=null && !u.isAdmin)
            {
                history("/Admin/AdminLogin")        
            }
        }
        else{
            history("/Admin/AdminLogin")   
        }
      },[]);
    const[dataList,setDataList] = useState([]);

    const getFetchData = async()=>{
        const data = await axios.get("/orders")
        //console.log(data);
        if(data.data.success){
          setDataList(data.data.data)
          
        }
    
      }
      useEffect(()=>{
        getFetchData()
    
      },[])

console.log(dataList);
    return(
        <>
        <h1>Orders</h1>
<div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cart</th>
              <th>Address</th>
              <th>Total Payment</th>
              <th>Order Status</th>
              <th>Payment Status</th>            
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
                      <td>{el.address}</td>
                      <td>{el.totalpayment}</td>
                      <td>{el.orderstatus}</td>
                      <td>{el.paymentstatus}</td>
                    </tr>

                )
              }))
              : 
              (<p style={{"textAlign": "center"}}>No data</p>)
            }
          </tbody>
        </table>
        </div>        
        </>
    )
}
export default AdminOrders;