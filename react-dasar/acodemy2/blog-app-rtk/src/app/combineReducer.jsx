import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "./post/postSlice";
import userReducer from "./user/userSlice";

const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
});

export default rootReducer;
