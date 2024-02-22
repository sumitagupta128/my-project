import React from "react";

const WishlistCartButton = ({ items, onClick }) => (
  <button className="btn" onClick={onClick}>
    Wishlist
    {items > 0 ? <span className="bubble">{items}</span> : null}
  </button>
);

WishlistCartButton.defaultProps = {
  items: 0
};

export default WishlistCartButton;
