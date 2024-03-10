import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  c: 0,
};

const action = {
  increment: (state) => {
    state.c += 1;
  },
  decrement: (state) => {
    state.c -= 1;
  },
  incrementByVal: (state, action) => {
    state.c += action.payload;
  },
};

const customReducer = createReducer(initialState, action);

export default customReducer;
