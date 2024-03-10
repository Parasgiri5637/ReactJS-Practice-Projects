import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import cartStore from "./ToolKit/Store.jsx";
import { Provider } from "react-redux";
import "../src/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={cartStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
