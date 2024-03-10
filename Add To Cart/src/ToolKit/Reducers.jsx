import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalAmount: 0,
};

function calcQuantity(state, action, operation) {
  state.cart = state.cart.map((item) =>
    item.id === action.payload
      ? {
          ...item,
          quantity: operation
            ? item.quantity + 1
            : Math.max(item.quantity - 1, 1),
          price: operation
            ? (item.price += item.originalPrice)
            : Math.max((item.price -= item.originalPrice), item.originalPrice),
        }
      : item
  );
  state.totalAmount = state.totalAmount = state.cart.reduce(
    (acc, curr) => acc + curr.originalPrice * curr.quantity,
    0
  );
}

const reducers = {
  addToCart: (state, action) => {
    const { url, price, title, quantity, originalPrice } = action.payload;
    const newItem = {
      id: nanoid(),
      url,
      price,
      title,
      quantity,
      originalPrice,
    };
    state.cart.push(newItem);
    state.totalAmount = state.cart.reduce((acc, curr) => acc + curr.price, 0);
  },

  deleteFromCart: (state, action) => {
    const itemRemove = state.cart.find(
      (item) => item.id === action.payload
    ).price;

    state.cart = state.cart.filter((item) => item.id !== action.payload);
    state.totalAmount -= itemRemove;
  },

  increaseQuantity: (state, action) => {
    calcQuantity(state, action, true);
  },
  decreaseQuantity: (state, action) => {
    calcQuantity(state, action, false);
  },
  clearCart: (state, action) => {
    state.cart = action.payload;
    state.totalAmount = 0;
  },
};

const cartSlice = createSlice({
  name: "AddToCart",
  initialState,
  reducers,
});

export const {
  addToCart,
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
