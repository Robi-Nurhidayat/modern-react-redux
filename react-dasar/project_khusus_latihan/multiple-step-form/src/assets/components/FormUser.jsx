import React, { useState } from "react";
import Confirm from "./Confirm";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import Success from "./Success";

function FormUser() {
  const [userData, setUserData] = useState({
    step: 1,
    namaDepan: "",
    namaBelakang: "",
    email: "",
    alamat: "",
    pendapatan: "",
    keterangan: "",
  });

  const prevStep = () => {
    const { step } = userData;

    setUserData({ ...userData, step: step - 1 });
  };
  const nextStep = () => {
    const { step } = userData;

    setUserData({ ...userData, step: step + 1 });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newDataUser = {
      ...userData,
      [name]: value,
    };

    setUserData(newDataUser);
  };

  switch (userData.step) {
    case 1:
      return (
        <FormStepOne
          nextStep={nextStep}
          userData={userData}
          handleChange={handleChange}
        />
      );
    case 2:
      return (
        <FormStepTwo
          userData={userData}
          handleChange={handleChange}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      );
    case 3:
      return (
        <Confirm userData={userData} prevStep={prevStep} nextStep={nextStep} />
      );
    case 4:
      return <Success />;
    default:
      console.log("nothing");
  }
  // return (
  //   <div>
  //     <FormStepOne userData={userData} handleChange={handleChange} />
  //   </div>
  // );
}

export default FormUser;
