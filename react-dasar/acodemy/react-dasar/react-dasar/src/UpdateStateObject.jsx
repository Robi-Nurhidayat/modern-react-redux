import React, { useState } from "react";

function UpdateStateObject() {
  const [pesan, setPesan] = useState({
    pesan1: "pesan 1 belum di update",
    pesan2: "pesan 2",
  });

  const updatePesan1 = () => {
    setPesan({ ...pesan, pesan1: "pesan 1 sudah di update" });
  };
  return (
    <div>
      <div>
        <p>{pesan.pesan1}</p>
        <p>{pesan.pesan2}</p>
      </div>
      <div>
        <button onClick={updatePesan1}>Update pesan 1</button>
      </div>
    </div>
  );
}

export default UpdateStateObject;
