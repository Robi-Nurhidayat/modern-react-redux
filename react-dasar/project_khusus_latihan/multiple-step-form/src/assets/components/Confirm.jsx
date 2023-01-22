import React from "react";

const Confirm = ({ userData, prevStep, nextStep }) => {
  return (
    <div
      style={{ maxWidth: "600px", display: "flex", justifyContent: "center" }}
    >
      <div>
        <h1>Form yang sudah diisi</h1>
        <p>Nama Depan : {userData.namaDepan}</p>
        <p>Nama Belakang : {userData.namaBelakang}</p>
        <p>Email: {userData.email}</p>
        <p>Alamat : {userData.alamat}</p>
        <p>Pendapatan : {userData.pendapatan}</p>
        <p>Keterangan : {userData.keterangan}</p>
        <div
          style={{ display: "flex", justifyContent: "flex-start", gap: "20px" }}
        >
          <button onClick={() => prevStep()} className="btn btn-secondary">
            Prev
          </button>
          <button onClick={() => nextStep()} className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
