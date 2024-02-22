import React ,{useState,useEffect} from "react";
import {useNavigate,Link, json } from "react-router-dom"
import CartButton from "../components/CartButton.js"
import { useSelector,useDispatch } from "react-redux";
import {Nav, NavDropdown} from 'react-bootstrap';
import WishlistCartButton from "./WishlistCartButton.js";
function UserNavbar(){
    const divStyle = {

        color: 'while',
      };
      
    const totalProducts = useSelector(state => state.cart.totalProducts);
    const totalCost = useSelector(state => state.cart.totalCost);

    const totalWishlistProducts = useSelector(state => state.wishlist.totalWishlistProducts);
    const history= useNavigate();
    const [isAdmin, setAdmin]=useState("");
    const [isUserLoggedIn, setUserLoggedIn]=useState("");
    const [user,setUser]=useState();
    useEffect(()=>{
        const userInfo= localStorage.getItem("userInfo");
        if(userInfo!=null)
        {
            //console.log(userInfo);
            const u=JSON.parse(userInfo);
            setUser(u);
            //console.log(user);
            if(u!=null && u.isAdmin)
            {
                history("/Admin/AdminHome");
                setAdmin(u.isAdmin);
                window.location.reload();        
            }
            else
            {
                setAdmin(false);
               
            }
            setUserLoggedIn(true);
        }
        else{
            setAdmin(false);
            setUserLoggedIn(false);
            //window.location.reload();   
        }
        },[]);
    const logout = () => {
        localStorage.removeItem("userInfo");
        localStorage.removeItem("userId");
        window.location.reload();
        history("/")
    };
    const[SearchValue,setSearchValue]=useState("");
        const handleChange=(event)=>{
            //console.log("event",event,event.target.value);
            //window.location.href="/"+event.target.value;
            setSearchValue(event.target.value);
        }

        const SearchProducts=()=>{
            console.log(SearchValue);
        window.location.href="/?search="+SearchValue;

        }
    
    //console.log(isAdmin,isUserLoggedIn);
    return(
        <>
    

    <header id="header" className="header-area style-01 layout-03">
        <div className="header-top bg-main hidden-xs">
            <div className="container">
                <div className="top-bar left">
                    <ul className="horizontal-menu">
                        <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i>contact@company.com</a></li>
                        <li><a href="#">Free Shipping for all Order of ₹99</a></li>
                    </ul>
                </div>
                <div className="top-bar right">
                    <ul className="social-list">
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                    </ul>
                    <ul className="horizontal-menu">
                        <li className="horz-menu-item currency">                        
                            <select name="currency">
                                <option value="usd" selected>₹ Rupees (India)</option>
                            </select>
                        </li>
                        <li className="horz-menu-item lang">
                            <select name="language">
                                <option value="en" selected>English (USD)</option>
                            </select>
                        </li>
                        <li>
                        {!isUserLoggedIn &&
                                <li><a href="/Login" className="login-link"><i className="biolife-icon icon-login"></i>Login/Register</a></li>

                        }
                        {!isAdmin && isUserLoggedIn &&
                            <Nav>
                                <NavDropdown style={{color:'black!important'}} title={"Welcome "+user?.name}>
                                    <NavDropdown.Item href="/MyProfile">My Profile</NavDropdown.Item><br/>
                                    <NavDropdown.Item href="/MyOrders">My Orders</NavDropdown.Item><br/>
                                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>      
                        }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="header-middle biolife-sticky-object ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2 col-md-6 col-xs-6">
                        <a href="/" className="biolife-logo"><img src="/assets/images/organic-3-green.png" alt="biolife logo" width="135" height="34"/></a>
                    </div>
                    <div className="col-lg-6 col-md-7 hidden-sm hidden-xs">
                        <div className="primary-menu">
                        <ul className="menu biolife-menu clone-main-menu clone-primary-menu" id="primary-menu" data-menuname="main menu">
                            <li className="menu-item"><a href="/">Home</a></li>                            
                            <li className="menu-item">
                                <a href="/Products" className="menu-name" >Products</a>                                
                            </li>                         
                            <li className="menu-item"><a href="/contact">Contact Us</a></li>
                            <li className="menu-item"><a href="/aboutus">About Us</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-md-6 col-xs-6">
                        <div className="biolife-cart-info">
                            <div className="mobile-search">
                                <a href="javascript:void(0)" className="open-searchbox" onClick={SearchProducts}><i className="biolife-icon icon-search"></i></a>
                                <div className="mobile-search-content">
                                    <form action="#" className="form-search" name="mobile-seacrh" method="get">
                                        <a href="#" className="btn-close"><span className="biolife-icon icon-close-menu"></span></a>
                                        <input type="text" name="search" className="input-text" value="" onChange={handleChange} placeholder="Search here..."/>
                                        
                                        <button type="submit" className="btn-submit">go</button>
                                    </form>
                                </div>
                            </div>
                            <div className="wishlist-block hidden-sm hidden-xs">
                                <a href="/WishlistCart" className="link-to">
                                    <span className="icon-qty-combine">
                                        <i className="icon-heart-bold biolife-icon"></i>
                                        <span className="qty">{totalWishlistProducts}</span>
                                    </span>
                                </a>
                            </div>
                            <div className="minicart-block">
                                <div className="minicart-contain">
                                    <a href="/Cart" className="link-to">
                                            <span className="icon-qty-combine">
                                                <i className="icon-cart-mini biolife-icon"></i>
                                                <span className="qty">{totalProducts}</span>
                                            </span>
                                        <span className="title">My Cart -</span>
                                        <span className="sub-total">₹{totalCost}</span>
                                    </a>
                                    {/*<div className="cart-content">
                                        <div className="cart-inner">
                                            <ul className="products">
                                                <li>
                                                    <div className="minicart-item">
                                                        <div className="thumb">
                                                            <a href="#"><img src="assets/images/minicart/pr-01.jpg" width="90" height="90" alt="National Fresh"/></a>
                                                        </div>
                                                        <div className="left-info">
                                                            <div className="product-title"><a href="#" className="product-name">National Fresh Fruit</a></div>
                                                            <div className="price">
                                                                <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                                <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                                            </div>
                                                            <div className="qty">
                                                                <label for="cart[id123][qty]">Qty:</label>
                                                                <input type="number" className="input-qty" name="cart[id123][qty]" id="cart[id123][qty]" value="1" disabled/>
                                                            </div>
                                                        </div>
                                                        <div className="action">
                                                            <a href="#" className="edit"><i className="fa fa-pencil" aria-hidden="true"></i></a>
                                                            <a href="#" className="remove"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="minicart-item">
                                                        <div className="thumb">
                                                            <a href="#"><img src="assets/images/minicart/pr-02.jpg" width="90" height="90" alt="National Fresh"/></a>
                                                        </div>
                                                        <div className="left-info">
                                                            <div className="product-title"><a href="#" className="product-name">National Fresh Fruit</a></div>
                                                            <div className="price">
                                                                <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                                <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                                            </div>
                                                            <div className="qty">
                                                                <label for="cart[id124][qty]">Qty:</label>
                                                                <input type="number" className="input-qty" name="cart[id124][qty]" id="cart[id124][qty]" value="1" disabled/>
                                                            </div>
                                                        </div>
                                                        <div className="action">
                                                            <a href="#" className="edit"><i className="fa fa-pencil" aria-hidden="true"></i></a>
                                                            <a href="#" className="remove"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="minicart-item">
                                                        <div className="thumb">
                                                            <a href="#"><img src="assets/images/minicart/pr-03.jpg" width="90" height="90" alt="National Fresh"/></a>
                                                        </div>
                                                        <div className="left-info">
                                                            <div className="product-title"><a href="#" className="product-name">National Fresh Fruit</a></div>
                                                            <div className="price">
                                                                <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                                <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                                            </div>
                                                            <div className="qty">
                                                                <label for="cart[id125][qty]">Qty:</label>
                                                                <input type="number" className="input-qty" name="cart[id125][qty]" id="cart[id125][qty]" value="1" disabled/>
                                                            </div>
                                                        </div>
                                                        <div className="action">
                                                            <a href="#" className="edit"><i className="fa fa-pencil" aria-hidden="true"></i></a>
                                                            <a href="#" className="remove"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="minicart-item">
                                                        <div className="thumb">
                                                            <a href="#"><img src="assets/images/minicart/pr-04.jpg" width="90" height="90" alt="National Fresh"/></a>
                                                        </div>
                                                        <div className="left-info">
                                                            <div className="product-title"><a href="#" className="product-name">National Fresh Fruit</a></div>
                                                            <div className="price">
                                                                <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                                <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                                            </div>
                                                            <div className="qty">
                                                                <label for="cart[id126][qty]">Qty:</label>
                                                                <input type="number" className="input-qty" name="cart[id126][qty]" id="cart[id126][qty]" value="1" disabled/>
                                                            </div>
                                                        </div>
                                                        <div className="action">
                                                            <a href="#" className="edit"><i className="fa fa-pencil" aria-hidden="true"></i></a>
                                                            <a href="#" className="remove"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="minicart-item">
                                                        <div className="thumb">
                                                            <a href="#"><img src="assets/images/minicart/pr-05.jpg" width="90" height="90" alt="National Fresh"/></a>
                                                        </div>
                                                        <div className="left-info">
                                                            <div className="product-title"><a href="#" className="product-name">National Fresh Fruit</a></div>
                                                            <div className="price">
                                                                <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                                <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                                            </div>
                                                            <div className="qty">
                                                                <label for="cart[id127][qty]">Qty:</label>
                                                                <input type="number" className="input-qty" name="cart[id127][qty]" id="cart[id127][qty]" value="1" disabled/>
                                                            </div>
                                                        </div>
                                                        <div className="action">
                                                            <a href="#" className="edit"><i className="fa fa-pencil" aria-hidden="true"></i></a>
                                                            <a href="#" className="remove"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <p className="btn-control">
                                                <a href="#" className="btn view-cart">view cart</a>
                                                <a href="#" className="btn">checkout</a>
                                            </p>
                                        </div>
                                    </div>*/}
                                </div>
                            </div>
                            <div className="mobile-menu-toggle">
                                <a className="btn-toggle" data-object="open-mobile-menu" href="javascript:void(0)">
                                    <span>Home</span>
                                    <span>Products</span>
                                    <span>About Us</span>
                                    <span>Contact Us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-bottom hidden-sm hidden-xs">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-12 col-md-8 padding-top-2px">
                        <div className="header-search-bar layout-01">
                            <form action="#" className="form-search" name="desktop-seacrh" method="get">
                                <input type="text" name="search" className="input-text" onChange={handleChange} placeholder="Search here..."/>
                                <select name="category">
                                    <option value="-1" selected>All Categories</option>
                                    <option value="vegetables">Vegetables</option>
                                    <option value="fresh_berries">Fresh Berries</option>
                                    <option value="ocean_foods">Ocean Foods</option>
                                    <option value="butter_eggs">Butter & Eggs</option>
                                    <option value="fastfood">Fastfood</option>
                                    <option value="fresh_meat">Fresh Meat</option>
                                    <option value="fresh_onion">Fresh Onion</option>
                                    <option value="papaya_crisps">Papaya & Crisps</option>
                                    <option value="oatmeal">Oatmeal</option>
                                </select>
                                <button type="submit" className="btn-submit" onClick={SearchProducts}><i className="biolife-icon icon-search"></i></button>
                            </form>
                        </div>
                        <div className="live-info">
                            <p className="telephone"><i className="fa fa-phone" aria-hidden="true"></i><b className="phone-number">(+91) 1122334455</b></p>
                            <p className="working-time">Mon-Fri: 8:30am-7:30pm; Sat-Sun: 9:30am-4:30pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
        
        
        {/*<Link to="/">Products</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Cart"> <CartButton items={totalProducts}/></Link>
        <Link to="/WishlistCart"> <WishlistCartButton items={totalWishlistProducts}/></Link>*/}
        
        

    </>
    )
}
export default UserNavbar