import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./post/postSlice";

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default store;
