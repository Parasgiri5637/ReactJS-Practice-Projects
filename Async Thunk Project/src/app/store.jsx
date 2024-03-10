import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import userDetails from "../Reducer/userDetailsSlice";
=======
import userDetails from "../features/userDetailsSlice";
>>>>>>> cd6b4bd5e470eb0749370b31f6ea16a064024d49

const store = configureStore({
  reducer: {
    app: userDetails,
  },
});

export default store;
