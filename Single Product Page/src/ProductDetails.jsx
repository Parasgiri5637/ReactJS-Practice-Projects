import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function ProductDetails({ setAddProduct }) {
  const [quantityCount, setQuantityCount] = useState(0);

  function handleAddToCart(data) {
    if (quantityCount === 0) return;
    const newData = {
      ...data,
      totalPrice: data.price * quantityCount,
    };
    console.log(newData);
    setAddProduct(newData);
  }

  function handleCount(status) {
    if (status === "minus") {
      if (quantityCount === 0) return;
      setQuantityCount(quantityCount - 1);
    } else if (status === "plus") {
      setQuantityCount(quantityCount + 1);
    }
  }

  return (
    <div className="product-Details">
      <h2>sneaker company</h2>
      <h1>Fall Limited Edition Sneakers</h1>
      <p className="product-not">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="price">
        <ul>
          <li className="product-price">$125.00</li>
          <li className="discount">50%</li>
        </ul>
        <p>
          <s>$250.00</s>
        </p>
      </div>
      <div className="action">
        <ul className="QuantityBtn">
          <li className="minusBtn">
            <img
              src="/icon-minus.svg"
              alt="minus icon"
              onClick={() => handleCount("minus")}
            />
          </li>
          <li className="quantity">{quantityCount}</li>
          <li className="plusBtn">
            <img
              src=" /icon-plus.svg"
              alt="plus icon"
              onClick={() => handleCount("plus")}
            />
          </li>
        </ul>

        <ul
          className="add-cart"
          onClick={() =>
            handleAddToCart({
              quantityCount,
              name: "Fall Limited Edition Sneakers",
              price: 125.0,
              img: "/image-product-1-thumbnail.jpg",
            })
          }
        >
          <li>
            <AiOutlineShoppingCart className="cart-icon" />
          </li>
          <li>Add to cart</li>
        </ul>
      </div>
    </div>
  );
}
