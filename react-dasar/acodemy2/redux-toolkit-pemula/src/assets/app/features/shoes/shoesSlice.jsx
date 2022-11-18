import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stock: 20,
};

const shoesReducer = createSlice({
  name: "shoes",
  initialState,
  reducers: {
    buyShoes: (state) => {
      state.stock = state.stock - 1;
    },
    addStock: (state, action) => {
      state.stock += action.payload;
    },
  },
});

export const { buyShoes, addStock } = shoesReducer.actions;
export default shoesReducer.reducer;
