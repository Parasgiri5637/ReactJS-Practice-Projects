import { takeEvery, call, put } from "redux-saga/effects";
import { PRODUCT_LIST, GET_PRODUCT_LIST } from "./constant";

function* getProduct() {
  try {
    const response = yield call(fetch, "https://dummyjson.com/products");
    const data = yield call([response, "json"]);
    yield put({ type: GET_PRODUCT_LIST, data });
    
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

export default function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProduct);
}
