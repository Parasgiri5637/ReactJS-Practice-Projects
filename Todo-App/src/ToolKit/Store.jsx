import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../ToolKit/Reducer";

const todoStore = configureStore({
  reducer: todoReducer,
});

export default todoStore;
