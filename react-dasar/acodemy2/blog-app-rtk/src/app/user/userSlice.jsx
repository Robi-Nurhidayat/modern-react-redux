import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    username: "Penulis 1",
  },
  {
    id: 2,
    username: "Penulis 2",
  },
];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
