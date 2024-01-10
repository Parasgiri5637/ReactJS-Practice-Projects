import Nav from "./Nav";
import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "../ToolKit/Reducers";

export default function Cart() {
  const cartItem = useSelector((state) => state.cart);
  const totalAmount = useSelector((state) => state.totalAmount);
  const dispatch = useDispatch();

  return (
    <>
      <Nav />
      <div className="cartData">
        <h2>Shopping Cart</h2>
        <p>You have 5 Items in Shopping Cart</p>
        <div className="itemsCart">
          {cartItem.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="checkOut">
          <small>Cart Total : {totalAmount}€</small>
          <div className="checkOutBtn">
            <button>checkOut</button>
            <button onClick={() => dispatch(clearCart([]))}>clear cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="itemList">
      <div className="item1">
        <img src={item.url} alt={item.title} />
        <p className="itemName">{item.title}</p>
      </div>
      <div className="item2">
        <div className="qunatityBtn">
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <p>{item.quantity}</p>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        </div>
        <span className="itemPrice">€{item.price}</span>
        <MdDeleteForever
          size={"20px"}
          color="#ff214f"
          onClick={() => dispatch(deleteFromCart(item.id))}
        />
      </div>
    </div>
  );
}
