import React from "react";
import SortTable from "../components/SortTable";

const TablePages = () => {
  const data = [
    { name: "Jeruk", color: "bg-blue-500", score: 5 },
    { name: "Mangga", color: "bg-yellow-500", score: 3 },
    { name: "Melon", color: "bg-green-500", score: 2 },
    { name: "Semangka", color: "bg-red-500", score: 1 },
    { name: "Kelapa", color: "bg-green-700", score: 4 },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 ${fruit.color} m-3`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };
  return (
    <div>
      <SortTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePages;
