export const addToCart = product => {
  //console.log(product);
  return {
    type: "ADD_TO_CART",
    product
  };
};
export const clearCart = () => {
  return {
    type: "CLEAR_CART"    
  };
};
export const setQuantity = (name, quantity) => {
  return {
    type: "SET_QUANTITY",
    name,
    quantity
  };
};

export const removeItem = name => {
  return {
    type: "REMOVE_ITEM",
    name
  };
};
