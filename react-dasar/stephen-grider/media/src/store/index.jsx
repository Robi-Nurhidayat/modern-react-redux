import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userReducer } from "./slices/usersSlice";
import { albumsApi, useFetchAlbumsQuery } from "./apis/albmusApi";

export const store = configureStore({
  reducer: {
    users: userReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

setupListeners(store.dispatch);

export * from "./thunk/fetchUsers";
export * from "./thunk/addUser";
export * from "./thunk/removeUser";
export { useFetchAlbumsQuery } from "./apis/albmusApi";
