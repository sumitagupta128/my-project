import React, { memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import WishlistItem from "./WishlistItem.js";
import WishlistTotals from "./WishlistTotals.js";
import { setWishlistQuantity, removeWishlistItem } from "../store/actions/wishlistActions.js";
import UserNavbar from "./UserNavbar"
import { addToCart } from "../store/actions/cartActions.js";
import UserBottonNavBar from "./UserBottomNavBar.js";

const WishlistCart = memo(() => {
  const { totalWishlistProducts, totalWishlistCost, wishlistitems } = useSelector(
    state => state.wishlist,   
    shallowEqual
  );
 
  
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
                <li className="nav-item"><span className="current-page">Wishlist Cart</span></li>
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
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h3 className="box-title">Your wishlist items</h3>
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
                                {wishlistitems &&
                                      wishlistitems.map(item => (
                                        <WishlistItem
                                          key={item.name}
                                          {...item}
                                          onQuantityChange={qty =>
                                            qty === 0
                                              ? dispatch(removeWishlistItem(item.name))
                                              : dispatch(setWishlistQuantity(item.name, qty))
                                          }
                                          onItemRemove={() => dispatch(removeWishlistItem(item.name))
                                          
                                        }
                                        onAddCart={() => dispatch(addToCart(item))}
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
                
            </div>
        </div>
      

    </div>
      </div>
    </div>
   
    <UserBottonNavBar/>
    </>
  );
});

export default WishlistCart;
