import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./carts/cartSlice";
import productsReducer from "./products/productsSlice";
const store = configureStore({
  reducer: {
    products: productsReducer,
    carts: cartReducer,
  },
});

export default store;
