import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Post 1",
    content:
      "ini adalah sebuah postingan yang mengandung hal yang kurang baik dalam kehidupan bernegara yatu sdaaaaaaaaaaaaaaaaa",
    userId: 1,
  },
  {
    id: 2,
    title: "Post 2",
    content:
      "sdfhklhlkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
    userId: 1,
  },
];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
