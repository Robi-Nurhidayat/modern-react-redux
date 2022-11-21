import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./post/postSlice";
import userReducer from "./user/userSlice";

const store = configureStore({
  reducer: {
    post: postReducer,
    users: userReducer,
  },
});

export default store;
