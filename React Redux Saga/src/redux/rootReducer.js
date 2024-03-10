import { combineReducers } from "redux";
import cartReducer from "./reducer";
import productListReducer from "./productReducer"

const rootReducer = combineReducers({
  cart:cartReducer,
  productList:productListReducer 
});

export default rootReducer;
