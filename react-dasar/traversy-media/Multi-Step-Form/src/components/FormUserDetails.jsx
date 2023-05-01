import React, { useState } from "react";

const FormUserDetails = ({ nextStep, handleChange }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const nextContinue = (e) => {
    e.preventDefault();
    handleChange(firstName, lastName, email);
    nextStep();
  };

  return (
    // <ThemeProvider theme={theme}>
    <div className="">
      <div className="bg-blue-500 h-10 flex justify-center items-center text-white text-xl">
        <h1>ENTER USER DETAILS</h1>
      </div>

      <form onSubmit={nextContinue}>
        <div className="flex justify-center items-center mt-5 flex-col gap-2.5">
          <div>
            <input
              type={"text"}
              placeholder="First Name"
              className="border-b-2 outline-none px-2 py-1.5"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              name="firstName"
            />
          </div>
          <div>
            <input
              type={"text"}
              placeholder="Last Name"
              className="border-b-2 outline-none px-2 py-1.5"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              name="lastName"
            />
          </div>
          <div>
            <input
              type={"email"}
              placeholder="Email"
              className="border-b-2 outline-none px-2 py-1.5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-blue-500 px-2.5 py-1.5 text-white font-base rounded"
            >
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
    // </ThemeProvider>
  );
};

export default FormUserDetails;
