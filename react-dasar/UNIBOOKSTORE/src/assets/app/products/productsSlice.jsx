import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk("products/getAll", async () => {
  const response = await axios.get("http://localhost:3000/products");

  return response.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productsSlice.reducer;
