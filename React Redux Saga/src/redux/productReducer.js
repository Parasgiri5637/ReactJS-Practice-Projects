// reducer.js
import { GET_PRODUCT_LIST } from "./constant";

const initialState = {
  productList: [],
};

export default function productListReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.data,
      };
    default: {
      return state;
    }
  }
}
