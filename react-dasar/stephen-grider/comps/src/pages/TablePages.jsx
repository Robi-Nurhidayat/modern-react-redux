import React from "react";
import Table from "../components/Table";

const TablePages = () => {
  const data = [
    { name: "Jeruk", color: "bg-blue-500", score: 5 },
    { name: "Mangga", color: "bg-yellow-500", score: 3 },
    { name: "Melon", color: "bg-green-500", score: 2 },
    { name: "Semangka", color: "bg-red-500", score: 1 },
    { name: "Kelapa", color: "bg-green-700", score: 4 },
  ];
  return (
    <div>
      <Table data={data} />
    </div>
  );
};

export default TablePages;
