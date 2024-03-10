import { ADD_TO_CART, REMOVE_FROM_CART,EMPTY_CART } from "./constant";

const initialState = {
  cartData: [],
};

export default function cartReducer(state = initialState, action) {
    
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartData: [...state.cartData, action.payload],
      };
    
case REMOVE_FROM_CART:{
    console.log(state.cartData);
    const updatedCartData = state.cartData ? state.cartData.slice(0, -1) : [];
    return {
      ...state,
      cartData: updatedCartData
    };
}
  case EMPTY_CART:
    return{
        ...state,
        cartData: []
    }
    default: {
      return state;
    }
  }
}
