import React from "react";
import UserForm from "./components/UserForm";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserForm />
    </ThemeProvider>
  );
};

export default App;
