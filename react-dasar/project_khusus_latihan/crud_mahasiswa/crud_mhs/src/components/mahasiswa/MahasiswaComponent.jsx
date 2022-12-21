import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import MahasiswaContext from "../../context/mahasiswa";
import style from "./Mahasiswa.module.css";

const MahasiswaComponent = () => {
  const { getAllMahasiswa, mahasiswa } = useContext(MahasiswaContext);

  useEffect(() => {
    getAllMahasiswa();
  }, []);

  const renderMahasiswa = mahasiswa.map((mhs, index) => {
    return (
      <tr className={style.tableStyle} key={mhs.nim}>
        <td className={style.tableStyle}>{mhs.nim}</td>
        <td className={style.tableStyle}>{mhs.nama}</td>
        <td className={style.tableStyle}>{mhs.kelas}</td>
        <td className={style.tableStyle}>{mhs.no_hp}</td>
        <td className={`${style.tableStyle} p-3 flex gap-1`}>
          <Link
            to={`/mahasiswa/edit/${mhs.id}`}
            className="py-1 px-2 rounded text-white bg-green-500"
          >
            Edit
          </Link>

          <Link className="py-1 px-2 rounded text-white bg-red-500">
            Delete
          </Link>
        </td>
      </tr>
    );
  });
  return (
    <div className="flex justify-center">
      <div>
        <h1>Data Mahasiswa</h1>
        <div className="my-3">
          <Link
            to={"/mahasiswa/tambah"}
            className="py-2 px-3 bg-blue-400 rounded text-white text-md hover:bg-blue-500"
          >
            Tambah Data
          </Link>
        </div>
        <table className={style.tableStyle}>
          <thead>
            <tr className={style.tableStyle}>
              <th className={style.tableStyle}>NIM</th>
              <th className={style.tableStyle}>NAMA</th>
              <th className={style.tableStyle}>KELAS </th>
              <th className={style.tableStyle}>NO HANDPHONE</th>
              <th className={style.tableStyle}>Aksi</th>
            </tr>
          </thead>
          <tbody>{renderMahasiswa}</tbody>
        </table>
      </div>
    </div>
  );
};

export default MahasiswaComponent;
