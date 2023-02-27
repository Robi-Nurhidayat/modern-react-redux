import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCarts = createAsyncThunk("cart/getAll", async () => {
  const response = await axios.get("http://localhost:3000/carts");

  return response.data;
});

export const addCart = createAsyncThunk("cart/add", async (data) => {
  const response = await axios.post("http://localhost:3000/carts", {
    data,
  });

  return response.data;
});

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCarts.fulfilled, (state, action) => {
      state.carts = action.payload;
    });

    builder.addCase(addCart.fulfilled, (state, action) => {
      state.carts = [...state.carts, action.payload];
    });
  },
});

export default cartSlice.reducer;
