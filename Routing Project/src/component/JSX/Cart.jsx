import Nav from "../JSX/Nav";
import styles from "../SCSS/Cart.module.scss";
import { CartData, AddCart, TotalCost } from "../../App";
import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import Empty from "./Empty";

export default function Cart() {
  const cartItem = useContext(CartData);
  const totalAmount = useContext(TotalCost);
  const dispatch = useContext(AddCart);

  return (
    <>
      <Nav />
      {cartItem.length === 0 ? (
        <Empty />
      ) : (
        <div className={styles.cartData}>
          <h2>Shopping Cart</h2>
          <p>You have {cartItem.length} Items in Shopping Cart</p>
          <div className={styles.itemsCart}>
            {cartItem.map((item, i) => (
              <CartItem key={i} items={item} />
            ))}
          </div>
          <div className={styles.checkOut}>
            <small>Cart Total : {totalAmount}€</small>
            <div className={styles.checkOutBtn}>
              <button>checkOut</button>
              <button onClick={() => dispatch({ type: "clearCart" })}>
                clear cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CartItem({ items }) {
  const dispatch = useContext(AddCart);
  return (
    <div className={styles.itemList}>
      <div className={styles.item1}>
        <img src={items.url} alt={items.title} />
        <p className={styles.itemName}>{items.title}</p>
      </div>
      <div className={styles.item2}>
        <div className={styles.qunatityBtn}>
          <button onClick={() => dispatch({ type: "dec", payload: items.id })}>
            -
          </button>
          <p>{items.quantity}</p>
          <button onClick={() => dispatch({ type: "inc", payload: items.id })}>
            +
          </button>
        </div>
        <span className={styles.itemPrice}>€{items.price}</span>
        <MdDeleteForever
          size={"20px"}
          color="#ff214f"
          onClick={() => dispatch({ type: "delete", payload: items.id })}
        />
      </div>
    </div>
  );
}
