import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stock: 20,
};

const shoesReducer = createSlice({
  name: "shoes",
  initialState,
  reducers: {},
});

export default shoesReducer.reducer;
