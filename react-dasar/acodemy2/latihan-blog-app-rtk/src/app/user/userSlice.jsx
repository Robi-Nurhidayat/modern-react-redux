import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Robi Nurhidayat",
  },
  {
    id: 2,
    name: "Adi Saputra",
  },
];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
