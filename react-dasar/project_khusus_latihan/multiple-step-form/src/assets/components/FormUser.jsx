import React, { useState } from "react";
import FormStepOne from "./FormStepOne";

function FormUser() {
  const [userData, setUserData] = useState({
    namaDepan: "",
    namaBelakang: "",
    email: "",
    alamat: "",
    pendapatan: "",
    keterangan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newDataUser = {
      ...userData,
      [name]: value,
    };

    setUserData(newDataUser);
  };

  console.log(userData);
  return (
    <div>
      <FormStepOne userData={userData} handleChange={handleChange} />
    </div>
  );
}

export default FormUser;
