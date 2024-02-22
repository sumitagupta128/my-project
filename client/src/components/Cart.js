import React, { memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import CartItem from "./CartItem.js";
import CartTotals from "./CartTotals.js";
import { setQuantity, removeItem } from "../store/actions/cartActions.js";
import UserNavbar from "./UserNavbar"
import axios from 'axios';

const Cart = memo(() => {
  const { totalProducts, totalCost, items } = useSelector(
    state => state.cart,   
    shallowEqual
  );
  const userInfo= localStorage.getItem("userInfo");
  if(userInfo==null)
  {
    window.location.href="/Login"
  }
  //console.log(totalCost)
  const checkout= async(e)=>
    {
        //console.log(items)
        if(userInfo==null)
        {
          window.location.href="/Login"
        }
        else
        {
          window.location.href="/Shipping"
          
        }
    }
  const dispatch = useDispatch();
  return (
    <>
    <UserNavbar/>
    <div className="hero-section hero-background">
        <h1 className="page-title">Organic Fruits</h1>
    </div>

    <div className="container">
        <nav className="biolife-nav">
            <ul>
                <li className="nav-item"><a href="/" className="permal-link">Home</a></li>
                <li className="nav-item"><span className="current-page">Shopping Cart</span></li>
            </ul>
        </nav>
    </div>
    <div className="page-contain shopping-cart">

      <div id="main-content" className="main-content">
    <div className="container">

        <div className="top-banner background-top-banner-for-shopping min-height-346px">
            <p className="subtitle">Save when you open an account online & spent on your first online purchase to day</p>
            <ul className="list">
                
            </ul>
            <p className="btns">
                <a href="/Signup" className="btn">Open Account</a>
            </p>
        </div>

        <div className="shopping-cart-container">
            <div className="row">
                <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                    <h3 className="box-title">Your cart items</h3>
                    <form className="shopping-cart-form" action="#" method="post">
                        <table className="shop_table cart-form">
                            <thead>
                            <tr>
                                <th className="product-name">Product Name</th>
                                <th className="product-price">Price</th>
                                <th className="product-quantity">Quantity</th>
                                <th className="product-subtotal">Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            {items &&
                                items.map(item => (
                                  <CartItem
                                    key={item.name}
                                    {...item}
                                    onQuantityChange={qty =>
                                      qty === 0
                                        ? dispatch(removeItem(item.name))
                                        : dispatch(setQuantity(item.name, qty))
                                    }
                                    onItemRemove={() => dispatch(removeItem(item.name))}
                                  />
                                ))}
                            
                            <tr className="cart_item wrap-buttons">
                                <td className="wrap-btn-control" colspan="4">
                                    <a href="/Products" className="btn back-to-shop">Back to Shop</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <div className="shpcart-subtotal-block">
                        <div className="subtotal-line">
                            <b className="stt-name">Subtotal <span className="sub">({totalProducts}items)</span></b>
                            <span className="stt-price">₹{totalCost}</span>
                        </div>
                        <div className="subtotal-line">
                            <b className="stt-name">Shipping</b>
                            <span className="stt-price">₹0.00</span>
                        </div>
                        <div className="tax-fee">
                            <p className="title">Est. Taxes & Fees</p>
                        </div>
                        <div className="btn-checkout">
                          {
                            totalProducts>0?
                        <button className="btn checkout" onClick={checkout}>Check out</button>
                        :
                        <button className="btn checkout" disabled>Check out</button>
                          }
                        </div>
                        
                        <p className="pickup-info"><b>Free Pickup</b> is available as soon as today More about shipping and pickup</p>
                    </div>
                </div>
            </div>
        </div>
      

    </div>
      </div>
    </div>
    
    </>
  );
});

export default Cart;
