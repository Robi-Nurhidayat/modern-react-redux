import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export * from "./thunk/fetchUsers";
export * from "./thunk/addUser";
export * from "./thunk/removeUser";
