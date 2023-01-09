import React from "react";

const FormPersonalDetails = ({ nextStep, handleChange, values, prevStep }) => {
  const nextContinue = () => {
    nextStep();
  };

  const back = () => {
    prevStep();
  };

  console.log(values.firstName);
  return (
    <div className="">
      <div className="bg-blue-500 h-10 flex justify-center items-center text-white text-xl">
        <h1>ENTER PERSONAL DETAILS</h1>
      </div>

      <div className="flex justify-center items-center mt-5 flex-col gap-2.5">
        <div>
          <input
            type={"text"}
            placeholder="occupation"
            className="border-b-2 outline-none px-2 py-1.5"
            value={values.occupation}
            onChange={handleChange}
            name="occupation"
          />
        </div>
        <div>
          <input
            type={"text"}
            placeholder="City"
            className="border-b-2 outline-none px-2 py-1.5"
            value={values.city}
            onChange={handleChange}
            name="city"
          />
        </div>
        <div>
          <input
            type={"text"}
            placeholder="Bio"
            className="border-b-2 outline-none px-2 py-1.5"
            value={values.bio}
            onChange={handleChange}
            name="bio"
          />
        </div>
        <div className="flex justify-between gap-4 items-center">
          <button
            onClick={nextContinue}
            className="bg-blue-500 px-2.5 py-1.5 text-white font-base rounded"
          >
            Continue
          </button>
          <button
            onClick={back}
            className="bg-gray-500 px-2.5 py-1.5 text-white font-base rounded"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormPersonalDetails;
