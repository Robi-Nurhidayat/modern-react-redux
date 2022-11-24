import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Belajar javascript",
    content: "alsfdjalsdjljasdljlasjdljasldjlasjdlajslj",
    userId: 1,
  },
  {
    id: 2,
    title: "Belajar Node js",
    content: "alsfdjalsdjljasdljlasjdljasldjlasjdlajslj",
    userId: 1,
  },
  {
    id: 3,
    title: "Belajar Ruby",
    content: "alsfdjalsdjljasdljlasjdljasldjlasjdlajslj",
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
