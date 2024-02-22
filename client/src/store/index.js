import { createStore,applyMiddleware } from "redux";
import rootReducer from "./reducers";
import {thunk} from "redux-thunk";
import {persistStore,persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
const config={
   key:"shopcart",
   storage,
   blacklist:["products"]
};
const persistedReducer=persistReducer(config,rootReducer);
const store=createStore(persistedReducer,applyMiddleware(thunk));

export default {
    store,
    persister:persistStore(store)
};
//export default createStore(rootReducer,applyMiddleware(thunk));
