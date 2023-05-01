import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const removeUser = createAsyncThunk("users/remove", async (user) => {
  const response = await axios.delete(`http://localhost:5000/users/${user.id}`);

  return response.data;
});
