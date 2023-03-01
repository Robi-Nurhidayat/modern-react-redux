import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCarts = createAsyncThunk("cart/getAll", async () => {
  const response = await axios.get("http://localhost:3000/carts");

  return response.data;
});

export const addCart = createAsyncThunk("cart/add", async ({ name, price }) => {
  const response = await axios.post("http://localhost:3000/carts", {
    name,
    price,
  });

  return response.data;
});

export const deleteCart = createAsyncThunk("cart/delete", async (id) => {
  await axios.delete(`http://localhost:3000/carts/${id}`);

  return id;
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

    builder.addCase(deleteCart.fulfilled, (state, action) => {
      const newCarts = state.carts.filter((cart) => cart.id != action.payload);

      state.carts = newCarts;
    });
  },
});

export default cartSlice.reducer;
