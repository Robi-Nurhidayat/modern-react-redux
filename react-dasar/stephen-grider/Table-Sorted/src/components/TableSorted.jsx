import React from "react";
import Table from "./Table";

const TableSorted = (props) => {
  const { data, config } = props;

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => {
        return <th className="bg-blue-500 cursor-pointer">{column.label}</th>;
      },
    };
  });
  return (
    <>
      <Table {...props} config={updatedConfig} />
    </>
  );
};

export default TableSorted;
