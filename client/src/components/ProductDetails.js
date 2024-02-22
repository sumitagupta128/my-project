import { connect, useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import UserBottonNavBar from "./UserBottomNavBar";
import { addToCart } from "../store/actions/cartActions.js";
import { addToWishlistCart } from "../store/actions/wishlistActions.js";
import { initProducts, searchProducts } from "../store/actions/catalogActions.js";
import { useEffect } from "react";
import { Card } from "react-bootstrap";

const ProductDetails = ({ 
    onAddToCart,
    onAddToWishlist
  }) => {

    const productId=useParams();
    console.log(productId.name);
    const [searchParams, setSearchParams] = useSearchParams();
  const searchValue=searchParams.get("search");
  //console.log(searchValue)
    const dispatch=useDispatch();
    useEffect(()=>{
      if(searchValue==null)
      {
        dispatch(initProducts());
        //dispatch(allCategory()); 
      }
      else
      {
        dispatch(searchProducts(searchValue));
      }
    },[]);
  //const catgeoryList = useSelector(state => state.categories);
  //console.log("catgeoryList",catgeoryList)
  const productList = useSelector(state => state.products.products);
  const products=productList[0];
  console.log(products)
  const product=products?.find((item)=>item._id===productId.id);
  console.log("singleItem",product);
  if(product===undefined)
  {
    return;
  }
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
                <li className="nav-item"><span className="current-page">Product Details</span></li>
            </ul>
        </nav>
    </div>

    <div className="page-contain single-product">
        <div className="container">

            <div id="main-content" className="main-content">
                
                <div className="sumary-product single-layout">
                    <div className="media">
                        <ul className="biolife-carousel slider-for" data-slick='{"arrows":false,"dots":false,"slidesMargin":30,"slidesToShow":1,"slidesToScroll":1,"fade":true,"asNavFor":".slider-nav"}'>
                            <li>
                            <Card.Img width={"500px"} height={"500px"} alt={product?.name} src={require(`../productimages/${product?.image}`)}></Card.Img>

                                </li>
                            {/*<li><img src="/assets/images/details-product/detail_02.jpg" alt="" width="500" height="500"/></li>
                            <li><img src="/assets/images/details-product/detail_03.jpg" alt="" width="500" height="500"/></li>
                            <li><img src="/assets/images/details-product/detail_04.jpg" alt="" width="500" height="500"/></li>
                            <li><img src="/assets/images/details-product/detail_05.jpg" alt="" width="500" height="500"/></li>
                            <li><img src="/assets/images/details-product/detail_06.jpg" alt="" width="500" height="500"/></li>
    <li><img src="/assets/images/details-product/detail_07.jpg" alt="" width="500" height="500"/></li>*/}
                        </ul>
                        
                    </div>
                    <div className="product-attribute">
                        <h3 className="title">{product?.name}</h3>
                        
                        <div className="price">
                            <ins><span className="price-amount"><span className="currencySymbol">₹</span>{product?.cost}</span></ins>
                        </div>
                        
                        <div className="shipping-info">
                            <p className="shipping-day">3-Day Shipping</p>
                            <p className="for-today">Pree Pickup Today</p>
                        </div>
                    </div>
                    <div className="action-form">
                        <div className="quantity-box">
                            <span className="title">Quantity:</span>
                            <div className="qty-input">
                                <input type="text" name="qty12554" value="1" data-max_value="1" data-min_value="1" data-step="1"/>
                                <a href="#" className="qty-btn btn-up"><i className="fa fa-caret-up" aria-hidden="true"></i></a>
                                <a href="#" className="qty-btn btn-down"><i className="fa fa-caret-down" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="total-price-contain">
                            <span className="title">Total Price:</span>
                            <p className="price">₹{product?.cost}</p>
                        </div>
                        <div className="buttons">
                            <a onClick={() => onAddToCart(product)} className="btn add-to-cart-btn">add to cart</a>
                            <p className="pull-row">
                                <a onClick={() => onAddToWishlist(product)} className="btn wishlist-btn">wishlist</a>
                            </p>
                        </div>
                        
                       
                        <div className="acepted-payment-methods">
                            <ul className="payment-methods">
                                <li><img src="/assets/images/card1.jpg" alt="" width="51" height="36"/></li>
                                <li><img src="/assets/images/card2.jpg" alt="" width="51" height="36"/></li>
                                <li><img src="/assets/images/card3.jpg" alt="" width="51" height="36"/></li>
                                <li><img src="/assets/images/card4.jpg" alt="" width="51" height="36"/></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="product-tabs single-layout biolife-tab-contain">
                    <div className="tab-head">
                        <ul className="tabs">
                            <li className="tab-element active"><a href="#tab_1st" className="tab-link">Product Descriptions</a></li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div id="tab_1st" className="tab-contain desc-tab active">
                            <p className="desc">{product?.desc}</p>
                        </div>
                       
                    </div>
                </div>

                
            </div>
        </div>
    </div>
    <UserBottonNavBar/>
    </>
    )
}
const mapStateToProps = state => {
    return {    
      products: state.products.products
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {    
      onAddToCart: product => dispatch(addToCart(product)),
      onAddToWishlist: product=> dispatch(addToWishlistCart(product))
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
