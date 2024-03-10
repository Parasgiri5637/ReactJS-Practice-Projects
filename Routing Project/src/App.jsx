import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./component/JSX/Home";
import About from "./component/JSX/About";
import Menu from "./component/JSX/Menu";
import BookTable from "./component/JSX/BookTable";
import Blog from "./component/JSX/Blog";
import Reviews from "./component/JSX/Reviews";
import ContactUs from "./component/JSX/ContactUs";
import Cart from "./component/JSX/Cart";
import Foods from "./component/JSX/Foods";
import Juices from "./component/JSX/Juices";

import "./App.scss";
import { createContext, useReducer } from "react";

const initialState = {
  cart: [],
  totalAmout: 0,
};

function calcQuantity(state, type, action) {
  if (type === "inc") {
    return {
      ...state,
      cart: state.cart.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
              price: item.price + item.originalPrice,
            }
          : item
      ),
      totalAmout:
        state.totalAmout +
        state.cart.find((item) => item.id === action.payload).originalPrice,
    };
  }
  if (type === "dec") {
    let { quantity } = state.cart.find((item) => item.id === action.payload);
    if (quantity === 1) return state;
    return {
      ...state,
      cart: state.cart.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity - 1,
              price: item.price - item.originalPrice,
            }
          : item
      ),
      totalAmout:
        state.totalAmout -
        state.cart.find((item) => item.id === action.payload).originalPrice,
    };
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "addToCart":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalAmout: state.cart.reduce((acc, item) => {
          return acc + item.price;
        }, action.payload.price),
      };
    case "inc":
      return calcQuantity(state, "inc", action);
    case "dec":
      return calcQuantity(state, "dec", action);
    case "delete":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
        totalAmout:
          state.totalAmout -
          state.cart.find((item) => item.id === action.payload).price,
      };
    case "clearCart":
      return { ...state, cart: [] };
    default:
      return state;
  }
}

const AddCart = createContext();
const CartData = createContext();
const TotalCost = createContext();

function App() {
  const [{ cart, totalAmout }, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <div className="overlay">
        <BrowserRouter>
          <AddCart.Provider value={dispatch}>
            <CartData.Provider value={cart}>
              <TotalCost.Provider value={totalAmout}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/menu" element={<Menu />} />

                  <Route path="/booktable" element={<BookTable />} />
                  <Route path="/blog" element={<Blog />}>
                    <Route index element={<Navigate replace to="foods" />} />
                    <Route path="foods" element={<Foods />} />
                    <Route path="juices" element={<Juices />} />
                  </Route>
                  <Route path="/reviews" element={<Reviews />} />
                  <Route path="/contactus" element={<ContactUs />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </TotalCost.Provider>
            </CartData.Provider>
          </AddCart.Provider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
export { AddCart, CartData, TotalCost };
