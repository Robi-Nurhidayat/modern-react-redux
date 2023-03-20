import React, { useState } from "react";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
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
            key={column.label}
            onClick={() => handleClick(column.label)}
            className=" border hover:bg-gray-500 cursor-pointer"
          >
            <div className="flex items-center">
              {getIcons(sortBy, orderBy, column.label)}
              {column.label}
            </div>
          </th>
        );
      },
    };
  });

  let updatedData = data;

  if (sortBy && orderBy) {
    const { sortValue } = config.find((col) => col.label === sortBy);

    updatedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const sortedValue = orderBy === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * sortedValue;
      } else {
        return (valueA - valueB) * sortedValue;
      }
    });
  }
  return (
    <div>
      {sortBy} - {orderBy}
      <Table {...props} config={updatedConfig} data={updatedData} />
    </div>
  );
};

function getIcons(sortBy, orderBy, label) {
  if (sortBy !== label) {
    return (
      <div>
        <GoArrowSmallDown />
        <GoArrowSmallUp />
      </div>
    );
  }

  if (orderBy === null) {
    return (
      <div>
        <GoArrowSmallDown />
        <GoArrowSmallUp />
      </div>
    );
  } else if (orderBy === "asc") {
    return <GoArrowSmallUp />;
  } else if (orderBy === "desc") {
    return <GoArrowSmallDown />;
  }
}

export default TableSorted;
