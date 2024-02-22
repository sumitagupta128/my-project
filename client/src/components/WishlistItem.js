import React from "react";
import {Card} from 'react-bootstrap';
import { addToCart } from "../store/actions/cartActions";

const WishlistItem = ({
  name,
  image,
  quantity,
  cost,
  onQuantityChange,
  onItemRemove,
  onAddCart
}) => {
  const callMultipleMethods=()=>{
    onItemRemove();
    onAddCart();
  }
  return (
    <>
    <tr className="cart_item">
                                <td className="product-thumbnail" data-title="Product Name">
                                    <a className="prd-thumb" href="#">
                                        <figure> <Card.Img width={"100px"} height={"150px"} alt={name} src={require(`../productimages/${image}`)}></Card.Img></figure>
                                    </a>
                                    <a className="prd-name" href="#">{name}</a><br/><br/>
                                    <div className="action">
                                    <a className="remove" onClick={callMultipleMethods}><i className="fa fa-trash-o" aria-hidden="true"></i>Remove and Move to cart</a>
                                    </div>
                                </td>
                                <td className="product-price" data-title="Price">
                                    <div className="price price-contain">
                                        <ins><span className="price-amount"><span className="currencySymbol">₹</span>{cost}</span></ins>
                                    </div>
                                </td>
                                <td className="product-quantity" data-title="Quantity">
                                    <div className="quantity-box type1">
                                        <div className="qty-input">
                                        <input
                                            type="number"
                                            defaultValue={quantity}
                                            min="1"
                                            max="1"
                                            onChange={e => onQuantityChange(Number(e.target.value))}
                                            onKeyUp={e => {
                                              if (e.keyCode === 13) {
                                                onQuantityChange(Number(e.target.value));
                                              }
                                            }}
                                          />
                                                    
                                        </div>
                                    </div>
                                </td>
                                <td className="product-subtotal" data-title="Total">
                                    <div className="price price-contain">
                                        <ins><span className="price-amount"><span className="currencySymbol">₹</span>{quantity * cost}</span></ins>
                                    </div>
                                </td>
                            </tr>
                            
    </>
  );
};

export default WishlistItem;
