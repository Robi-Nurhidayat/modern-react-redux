import React from "react";
import style from "./Content.module.css";

const Content = () => {
  return (
    <div className="border pl-6 pt-5">
      <div>Header</div>
      <div>
        <h1>Data Mahasiswa</h1>
        <table className={style.tableStyle}>
          <thead>
            <tr className={style.tableStyle}>
              <th className={style.tableStyle}>NIM</th>
              <th className={style.tableStyle}>NAMA</th>
              <th className={style.tableStyle}>KELAS </th>
              <th className={style.tableStyle}>NO HANDPHONE</th>
            </tr>
          </thead>
          <tbody>
            <tr className={style.tableStyle}>
              <td className={style.tableStyle}>10118252</td>
              <td className={style.tableStyle}>Robi</td>
              <td className={style.tableStyle}>IF-6</td>
              <td className={style.tableStyle}>054694586908540</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Content;
