import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Reducers";

const cartStore = configureStore({
  reducer: cartSlice,
});

export default cartStore;
