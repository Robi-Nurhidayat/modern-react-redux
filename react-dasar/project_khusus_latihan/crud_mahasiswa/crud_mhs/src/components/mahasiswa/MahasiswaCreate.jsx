import React, { useState } from "react";

const MahasiswaCreate = () => {
  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [noHp, setNoHp] = useState("");
  return (
    <div>
      <h1 className="text-2xl mb-6 font-bold">FORM TAMBAH DATA</h1>
      <form className="w-80 flex flex-col gap-3 ">
        <div className="flex flex-col justify-center gap-1">
          <label className="text-xl">NIM</label>
          <input
            type={"text"}
            className="border py-1 px-1.5 outline-none rounded"
            value={nim}
            onChange={(e) => setNim(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center gap-1">
          <label className="text-xl">NAMA</label>
          <input
            type={"text"}
            className="border py-1 px-1.5 outline-none rounded"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center gap-1">
          <label className="text-xl">KELAS</label>
          <input
            type={"text"}
            className="border py-1 px-1.5 outline-none rounded"
            value={kelas}
            onChange={(e) => setKelas(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center gap-1">
          <label className="text-xl">NO HANDPHONE</label>
          <input
            type={"text"}
            className="border py-1 px-1.5 outline-none rounded"
            value={noHp}
            onChange={(e) => setNoHp(e.target.value)}
          />
        </div>
        <button
          className="px-3 py-2 bg-blue-500 rounded text-base text-white font-bold hover:bg-blue-600"
          type="submit"
        >
          Simpan
        </button>
      </form>
    </div>
  );
};

export default MahasiswaCreate;
