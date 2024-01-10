export default function Nav({
  sidebar,
  setSideBar,
  isCart,
  setCart,
  totalProduct,
}) {
  return (
    <div className="nav">
      {/* ============================== Nav Left Content */}
      <div className="nav__left">
        <div className="nav__left-menu">
          <div className="menu__list">
            <img
              src="/icon-menu.svg"
              alt="menu-icon"
              className="menu__menuIcon"
              onClick={() => setSideBar(!sidebar)}
            />
            <ul className={sidebar ? "" : "activeSideBar"}>
              <img
                src="/icon-close.svg"
                alt="close-Icon"
                onClick={() => setSideBar(!sidebar)}
                className="close-Icon"
              />
              <li>
                <a href="#">Collection</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <img src="/logo.svg" alt="logo" className="logo" />
        </div>
      </div>
      {/* =============================== Nav Right Content */}
      <div className="nav__right">
        <div className="cart" onClick={() => setCart(!isCart)}>
          <img src="/icon-cart.svg" alt="cart icon" />
          <span className="cart-quantity">{totalProduct?.quantityCount}</span>
        </div>
        <div className="user">
          <img src="/image-avatar.png" alt="user image" />
        </div>
      </div>
    </div>
  );
}
