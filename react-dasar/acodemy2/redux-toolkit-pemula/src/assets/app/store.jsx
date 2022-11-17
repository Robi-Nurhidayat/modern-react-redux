import { configureStore } from "@reduxjs/toolkit";
import shoesReducer from "./features/shoes/shoesSlice";
const store = configureStore({
  reducer: {
    shoes: shoesReducer,
  },
});

export default store;
