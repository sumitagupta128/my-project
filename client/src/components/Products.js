import { useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";
import ProductCard from "./ProductCard"
import  {  initProducts, searchProducts }  from "../store/actions/catalogActions.js";
import UserNavbar from "./UserNavbar"
import { connect } from "react-redux";
import { addToCart } from "../store/actions/cartActions.js";
import { useSearchParams } from "react-router-dom";
import { addToWishlistCart } from "../store/actions/wishlistActions.js";
import UserBottonNavBar from "./UserBottomNavBar.js";

const Products = ({ 
  onAddToCart,
  onAddToWishlist
}) => {
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
  const pList=productList[0];
  console.log("data",productList)
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
                <li className="nav-item"><span className="current-page">Products</span></li>
            </ul>
        </nav>
    </div>
    <div className="page-contain category-page left-sidebar">
        <div className="container">
            <div className="row">
                <div id="main-content" className="main-content col-lg-12 col-md-8 col-sm-12 col-xs-12">

                <div className="product-category grid-style">                       

                        <div className="row">
                            <ul className="products-list">

                            {pList?.map((product, idx)=>(
                            <ProductCard key={product._id}
                                              {...product}
                                              onClickAddButton={() => onAddToCart(product)}
                                              onClickAddWishlistButton={() => onAddToWishlist(product)} />

                            ))}
                            </ul>
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
export default connect(mapStateToProps, mapDispatchToProps)(Products);