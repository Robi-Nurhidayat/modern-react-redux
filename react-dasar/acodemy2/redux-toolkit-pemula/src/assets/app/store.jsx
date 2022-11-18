import { configureStore } from "@reduxjs/toolkit";
import shoesReducer from "./features/shoes/shoesSlice";
import userReducer from "./features/user/userReducer";
const store = configureStore({
  reducer: {
    shoes: shoesReducer,
    user: userReducer,
  },
});

export default store;
