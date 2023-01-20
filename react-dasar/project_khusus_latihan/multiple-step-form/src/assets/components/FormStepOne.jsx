import React, { useState } from "react";

function FormStepOne({ userData, handleChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(userData.namaDepan);
  };
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
      <form onSubmit={handleSubmit}>
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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormStepOne;
