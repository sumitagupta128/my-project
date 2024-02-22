export const addToWishlistCart = product => {
    return {
      type: "ADD_TO_WISHLIST_CART",
      product
    };
  };
  export const clearWishlistCart = () => {
    return {
      type: "CLEAR_WISHLIST_CART"    
    };
  };
  export const setWishlistQuantity = (name, quantity) => {
    return {
      type: "SET_WISHLIST_QUANTITY",
      name,
      quantity
    };
  };
  
  export const removeWishlistItem = name => {
    return {
      type: "REMOVE_WISHLIST_ITEM",
      name
    };
  };
  