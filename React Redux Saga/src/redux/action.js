import { ADD_TO_CART,REMOVE_FROM_CART, EMPTY_CART } from "./constant";


export function addtoCart(data) {
    return {
      type: ADD_TO_CART,
      payload: data, 
    };
  }
  

export function removefromCart(data){
    return {
        type:REMOVE_FROM_CART,
        payload: data
    }
}

export function emptyCart(data){
    return{
        type: EMPTY_CART,
        payload: data
    }
}