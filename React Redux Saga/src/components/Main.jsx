import { useDispatch } from "react-redux";
import { addtoCart, removefromCart,emptyCart } from "../redux/action";

import Header from "./Header";
import { productList } from "../redux/productAction";

function Main() {
  const dispatch = useDispatch();
  const itemObj = {
    id: Math.floor(Math.random() * 1000000).toString(),
    name: "Iphone 14",
    price: "$1000",
    pc: 1,
    charger: "NO",
  };


  
  return (
    <>
      <Header />
      <button onClick={() => dispatch(addtoCart(itemObj))}>Add to Cart</button>
      <button onClick={() => dispatch(removefromCart())}>
        Remove From Cart
      </button>
      <button onClick={() => dispatch(emptyCart())}>Empty The Cart</button>
      <button onClick={() => dispatch(productList())}>Call Product List</button>
      
    </>
  );
}

export default Main;
