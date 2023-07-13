import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { toggle: toggleSlice.reducer, cart: cartSlice.reducer },
});

export default store;
