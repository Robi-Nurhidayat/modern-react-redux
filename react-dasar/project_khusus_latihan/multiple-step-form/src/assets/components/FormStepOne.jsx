import React, { useState } from "react";

function FormStepOne({ userData, handleChange, nextStep }) {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
        border: "1px solid lightgray",
        padding: "10px",
        marginTop: "50px",
      }}
    >
      <h1>Step 1</h1>

      <div className="mb-3">
        <label className="form-label">Nama Depan</label>
        <input
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
          value={userData.namaDepan}
          onChange={handleChange}
          name="namaDepan"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Nama Belakang</label>
        <input
          type="text"
          className="form-control"
          name="namaBelakang"
          value={userData.namaBelakang}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
      </div>

      <button
        onClick={() => nextStep()}
        type="submit"
        className="btn btn-primary"
      >
        Next
      </button>
    </div>
  );
}

export default FormStepOne;
