import { combineReducers } from "redux";
import catalogReducer from "./catalogReducer.js";
import cartReducer from "./cartReducer.js";
import wishlistReducer from "./wishlistReducer.js"
export default combineReducers({
  products: catalogReducer,
  cart: cartReducer,
  wishlist: wishlistReducer
});
