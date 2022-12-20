import React, { useContext, useState } from "react";
import MahasiswaContext from "../../context/mahasiswa";

const MahasiswaCreate = () => {
  const { createMahasiswa } = useContext(MahasiswaContext);
  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [noHp, setNoHp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createMahasiswa(nim, nama, kelas, noHp);
    setNim("");
    setNama("");
    setKelas("");
    setNoHp("");
  };
  return (
    <div>
      <h1 className="text-2xl mb-6 font-bold">FORM TAMBAH DATA</h1>
      <form onSubmit={handleSubmit} className="w-80 flex flex-col gap-3 ">
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

          <select
            className="border py-1 px-1.5 outline-none rounded"
            onChange={(e) => setKelas(e.target.value)}
          >
            <option>----Pilih Kelas----</option>
            <option value={"IF-6"}>IF-6</option>
            <option value={"IF-7"}>IF-7</option>
          </select>
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
