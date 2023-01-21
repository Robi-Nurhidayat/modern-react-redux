import React from "react";

const FormStepTwo = ({ prevStep, userData }) => {
  console.log(userData.namaDepan);
  return (
    <div>
      <button onClick={() => prevStep()}>Back</button>
    </div>
  );
};

export default FormStepTwo;
