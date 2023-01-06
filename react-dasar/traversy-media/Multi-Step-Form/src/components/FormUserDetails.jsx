import React from "react";

import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const FormUserDetails = ({ nextStep, handleChange, values }) => {
  const nextContinue = (e) => {
    e.preventDefault();
    nextStep();
  };
  return <div>FormUserDetails</div>;
};

export default FormUserDetails;
