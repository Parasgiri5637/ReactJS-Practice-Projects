import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
// import {createStore} from "redux"
import rootReducer from "./rootReducer";
import productSaga from "./productSaga"


// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
   reducer: rootReducer,
   middleware:() => [sagaMiddleware]
})


sagaMiddleware.run(productSaga)

export default store;