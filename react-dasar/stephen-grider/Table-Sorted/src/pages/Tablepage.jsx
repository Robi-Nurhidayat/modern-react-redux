import React from "react";
import TableSorted from "../components/TableSorted";

function Tablepage() {
  const data = [
    { nama: "Robi Nurhidayat", harian: 60, uts: 60, uas: 70 },
    { nama: "Ari Nurhidayat", harian: 50, uts: 65, uas: 75 },
    { nama: "Asep Nurhidayat", harian: 65, uts: 61, uas: 74 },
    { nama: "Maid Nurhidayat", harian: 67, uts: 69, uas: 60 },
    { nama: "Akmal Nurhidayat", harian: 30, uts: 80, uas: 80 },
  ];

  const config = [
    {
      label: "Nama",
      render: (data) => data.nama,
      sortValue: (data) => data.nama,
    },
    {
      label: "Harian",
      render: (data) => data.harian,
      sortValue: (data) => data.harian,
    },
    { label: "UTS", render: (data) => data.uts, sortValue: (data) => data.uts },
    { label: "UAS", render: (data) => data.uas },
  ];
  return <TableSorted data={data} config={config} />;
}

export default Tablepage;
