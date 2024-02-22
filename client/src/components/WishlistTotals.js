import React from "react";

const WishlistCartTotals = ({ totalWishlistProducts, totalWishlistCost }) => {
  return (
    <div className="cart-totals">
      <div className="ct-total-quantity">{totalWishlistProducts}</div>
      <div className="ct-total-cost">₹{totalWishlistCost}</div>
    </div>
  );
};

export default WishlistCartTotals;
