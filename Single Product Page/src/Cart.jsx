export default function Cart({ cartData, setAddProduct }) {
  function handleDeleteCart() {
    setAddProduct("");
  }

  return (
    <div className="cart-container">
      <div className="cart-title">
        <h2>Cart</h2>
      </div>
      {cartData && (
        <>
          <div className="cart-product-detail">
            <img src={cartData?.img} alt="cart image" className="cart-img" />
            <div className="product-info">
              <p>{cartData?.name}</p>
              <p>
                ${cartData.price} x {cartData.quantityCount}{" "}
                <span className="product-final-price">
                  ${cartData?.totalPrice}
                </span>
              </p>
            </div>
            <img
              src="/icon-delete.svg"
              alt="delete button"
              className="delete-icon"
              onClick={handleDeleteCart}
            />
          </div>
          <div className="checkout-btn">
            <button>Checkout</button>
          </div>
        </>
      )}
      {!cartData && <p className="empty-cart">Your cart is empty</p>}
    </div>
  );
}
