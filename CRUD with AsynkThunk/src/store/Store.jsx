import { configureStore } from "@reduxjs/toolkit";
import crudSlice from "../crudReducer/CrudReducer";

const Store = configureStore({
  reducer: {
    app: crudSlice,
  },
});

export default Store;
