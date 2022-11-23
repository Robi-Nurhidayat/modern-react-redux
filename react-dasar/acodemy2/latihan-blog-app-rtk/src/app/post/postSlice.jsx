import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Belajar javascript",
    content: "alsfdjalsdjljasdljlasjdljasldjlasjdlajslj",
    penulis: "Penulis 1",
  },
  {
    id: 2,
    title: "Belajar Node js",
    content: "alsfdjalsdjljasdljlasjdljasldjlasjdlajslj",
    penulis: "Penulis 1",
  },
  {
    id: 3,
    title: "Belajar Ruby",
    content: "alsfdjalsdjljasdljlasjdljasldjlasjdlajslj",
    penulis: "Penulis 1",
  },
];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});
