import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { CartData } from "../../App";
import styles from "../SCSS/Nav.module.scss";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isTop, setIsTop] = useState(false);

  const cartCount = useContext(CartData);

  function changeBackGround() {
    if (window.scrollY >= 30) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  }
  window.addEventListener("scroll", changeBackGround);

  return (
    <nav className={`${styles.nav} ${isTop ? styles.activeNav : ""}`}>
      <div className={styles.logo}>
        <Link to="/">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACOCAMAAAALmGoYAAADAFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8HPQsIAAAA/3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1O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"
            alt="logo"
          />
        </Link>
      </div>
      (
      <div className={`${styles.menuLink} ${isNavOpen && styles.activeTop}`}>
        <ul className="link1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/booktable">Book-Table</NavLink>
          </li>
        </ul>

        <div className={styles.logo2}>
          <Link to="/">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACOCAMAAAALmGoYAAADAFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8HPQsIAAAA/3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1O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"
              alt="logo"
            />
          </Link>
        </div>

        <ul className="link2">
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/reviews">Reviews</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">Contact Us</NavLink>
          </li>
          <span className={styles.cart2}>
            <Link to="/cart">
              <FaShoppingCart size={25} color="#ff214f" />
              <span className={styles.cartCount}>
                {cartCount ? (cartCount.length ? cartCount.length : "") : ""}
              </span>
            </Link>
          </span>
        </ul>
      </div>
      )
      <div className={styles.icons}>
        <span
          className={styles.menu}
          // className="material-symbols-rounded"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <GiHamburgerMenu size={35} />
        </span>
        <span className={styles.cart}>
          <Link to="/cart">
            <FaShoppingCart size={30} color="#ff214f" />
            <span className={styles.cartCount}>
              {cartCount ? (cartCount.length ? cartCount.length : "") : ""}
            </span>
          </Link>
        </span>
      </div>
    </nav>
  );
}
