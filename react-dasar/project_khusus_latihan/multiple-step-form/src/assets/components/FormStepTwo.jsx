import React from "react";

const FormStepTwo = ({ prevStep, userData, handleChange, nextStep }) => {
  console.log(userData);
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
      <h1>Step 2</h1>

      <div className="mb-3">
        <label className="form-label">Alamat</label>
        <input
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
          value={userData.alamat}
          onChange={handleChange}
          name="alamat"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Pendapatan</label>
        <input
          type="number"
          className="form-control"
          name="pendapatan"
          value={userData.pendapatan}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Keterangan</label>
        <input
          type="text"
          className="form-control"
          name="keterangan"
          value={userData.keterangan}
          onChange={handleChange}
        />
      </div>

      <div
        style={{ display: "flex", justifyContent: "flex-start", gap: "20px" }}
      >
        <button onClick={() => prevStep()} className="btn btn-secondary">
          Prev
        </button>
        <button onClick={() => nextStep()} className="btn btn-primary">
          Next
        </button>
      </div>
    </div>
  );
};

export default FormStepTwo;
