import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Post 1",
    content:
      "ini adalah sebuah postingan yang mengandung hal yang kurang baik dalam kehidupan bernegara yatu sdaaaaaaaaaaaaaaaaa",
  },
  {
    id: 2,
    title: "Post 2",
    content:
      "sdfhklhlkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
  },
];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});

export default postSlice.reducer;
