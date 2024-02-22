import {Card} from 'react-bootstrap';
function ProductCard({_id,name,desc,cost,image,onClickAddButton,onClickAddWishlistButton}){
    
    return(
        
        <>
        <li className="product-item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                    <div className="contain-product layout-default">
                                        <div className="product-thumb">
                                            <a href={`/product/${_id}`} className="link-to-product">
                                            <Card.Img width={"100px"} height={"100px"} alt={name} src={require(`../productimages/${image}`)}></Card.Img>
                                            </a>
                                        </div>
                                        <div className="info">
                                            <h4 className="product-title">{name}</h4><br/>
                                            {/*<p className='excerpt'>{desc}</p><br/>*/}
                                            <div className="price">
                                                <ins><span className="price-amount"><span className="currencySymbol">₹</span>{cost} per KG</span></ins>
                                            </div>
                                           
                                            <div className="slide-down-box">
                                                <p className="message">All products are carefully selected to ensure food safety.</p>
                                                <div className="buttons">
                                                    <a href="#" className="btn wishlist-btn" onClick={onClickAddWishlistButton}><i className="fa fa-heart" aria-hidden="true"></i></a>
                                                    <a href="#" className="btn add-to-cart-btn" onClick={onClickAddButton}><i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
       
        
        </>
    )
}
export default ProductCard