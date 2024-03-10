import { useSelector } from "react-redux";

export default function Header() {
const selector = useSelector(state => state.cart.cartData)
const productList = useSelector(state => state.productList)
console.log(productList);

  return (
    <header>
      <div className="cart-Icon">
        <img src="https://imgs.search.brave.com/Lu1_i0AVU0l3cZ9WcfKZBNDijIXiAl7Bat0_sFeldhY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzczLzEwLzY0/LzM2MF9GXzczMTA2/NDI4X1E5MUxOVWln/ZzRaUklpMUl0eElj/Z0V6eVc4Qzl5bHVF/LmpwZw" alt="cart image" />
        <span>{selector.length}</span>
      </div>
    </header>
  );
}
