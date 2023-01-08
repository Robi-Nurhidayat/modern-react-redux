import React from "react";
import { useState } from "react";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";

const UserForm = () => {
  const [state, setState] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });

  //   Proceed to Next Step
  const nextStep = () => {
    const { step } = state;
    setState({
      step: step + 1,
    });
  };

  //   Go back to prev
  const prevStep = () => {
    const { step } = state;
    setState({
      step: step - 1,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  console.log(state.firstName);
  const { step } = state;

  const { firstName, lastName, email, occupation, city, bio } = state;

  const values = { firstName, lastName, email, occupation, city, bio };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return <FormPersonalDetails firstName={values.firstName} />;
    case 3:
      return <h1>Confirm </h1>;
    case 4:
      return <h1>Succees</h1>;
  }
};

export default UserForm;
