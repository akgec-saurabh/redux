import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  title: "Test Item",
  quantity: 3,
  total: 18,
  price: 6,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addQuantity(state) {
      state.quantity = state.quantity + 1;
      state.total = state.quantity * state.price;
    },
    removeQuantity(state) {
      state.quantity = state.quantity - 1;
      state.total = state.quantity * state.price;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
