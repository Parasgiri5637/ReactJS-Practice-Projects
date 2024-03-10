import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Menu from "./Components/Menu";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
