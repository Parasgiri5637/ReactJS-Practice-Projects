import { useState } from "react";
import Nav from "./Nav";
import Slider from "./Slider";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

import "./App.scss";

function App() {
  const [sidebar, setSideBar] = useState(true);
  const [isCart, setCart] = useState(false);
  const [addProduct, setAddProduct] = useState();

  return (
    <>
      <div className={sidebar ? "" : "overlay"}></div>
      <Nav
        sidebar={sidebar}
        setSideBar={setSideBar}
        isCart={isCart}
        setCart={setCart}
        totalProduct={addProduct}
      />
      <div className="container">
        <Slider />
        <ProductDetails setAddProduct={setAddProduct} />
        {isCart && <Cart cartData={addProduct} setAddProduct={setAddProduct} />}
      </div>
    </>
  );
}

export default App;
