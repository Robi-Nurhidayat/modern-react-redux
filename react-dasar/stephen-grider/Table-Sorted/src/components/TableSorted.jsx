import React, { useState } from "react";
import Table from "./Table";

const TableSorted = (props) => {
  const { data, config } = props;
  const [sortBy, setSortBy] = useState(null);
  const [orderBy, setOrderBy] = useState(null);

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setOrderBy("asc");
      setSortBy(label);
      return;
    }

    if (orderBy === null) {
      setOrderBy("asc");
      setSortBy(label);
    } else if (orderBy === "asc") {
      setOrderBy("desc");
      setSortBy(label);
    } else if (orderBy === "desc") {
      setOrderBy(null);
      setSortBy(null);
    }
  };
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => {
        return (
          <th
            onClick={() => handleClick(column.label)}
            className="bg-blue-500 cursor-pointer"
          >
            {column.label}
          </th>
        );
      },
    };
  });
  return (
    <div>
      {sortBy} - {orderBy}
      <Table {...props} config={updatedConfig} />
    </div>
  );
};

export default TableSorted;
