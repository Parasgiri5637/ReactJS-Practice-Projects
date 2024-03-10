import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Nav() {
  const cartitems = useSelector((state) => state.cart);
  return (
    <nav>
      <ul>
        <NavLink to="/">
          <li>Menu</li>
        </NavLink>
        <NavLink to="/cart">
          <li>
            Cart{" "}
            <span style={{ color: "red" }}>
              {cartitems ? cartitems.length : ""}
            </span>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}
