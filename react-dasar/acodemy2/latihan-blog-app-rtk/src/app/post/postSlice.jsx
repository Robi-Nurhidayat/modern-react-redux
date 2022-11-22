import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Belajar javascript",
    content: "alsfdjalsdjljasdljlasjdljasldjlasjdlajslj",
  },
  {
    id: 2,
    title: "Belajar Node js",
    content: "alsfdjalsdjljasdljlasjdljasldjlasjdlajslj",
  },
  {
    id: 3,
    title: "Belajar Ruby",
    content: "alsfdjalsdjljasdljlasjdljasldjlasjdlajslj",
  },
];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});
