import React from "react";

const FormUserDetails = ({ nextStep, handleChange, values }) => {
  // const { firstName, lastName, email } = values;
  const nextContinue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    // <ThemeProvider theme={theme}>
    <div className="">
      <div className="bg-blue-500 h-10 flex justify-center items-center text-white text-xl">
        <h1>ENTER USER DETAILS</h1>
      </div>

      <div className="flex justify-center items-center mt-5">
        <form onSubmit={nextContinue} className="flex flex-col gap-3">
          <div>
            <input
              type={"text"}
              placeholder="First Name"
              className="border-b-2 outline-none px-2 py-1.5"
              value={values.firstName}
              onChange={handleChange}
              name="firstName"
            />
          </div>
          <div>
            <input
              type={"text"}
              placeholder="Last Name"
              className="border-b-2 outline-none px-2 py-1.5"
              value={values.lastName}
              onChange={handleChange}
              name="lastName"
            />
          </div>
          <div>
            <input
              type={"email"}
              placeholder="Email"
              className="border-b-2 outline-none px-2 py-1.5"
              value={values.email}
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-blue-500 px-2.5 py-1.5 text-white font-base rounded">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
    // </ThemeProvider>
  );
};

export default FormUserDetails;
