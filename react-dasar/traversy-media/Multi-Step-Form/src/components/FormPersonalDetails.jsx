import React from "react";

const FormPersonalDetails = ({ firstName }) => {
  console.log("first" + firstName);
  return <div>{firstName}</div>;
};

export default FormPersonalDetails;
