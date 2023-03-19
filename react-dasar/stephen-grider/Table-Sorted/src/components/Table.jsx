import React, { Fragment } from "react";

const Table = ({ data, config }) => {
  const renderHeader = config.map((column) => {
    if (column.header) {
      return <Fragment>{column.header()}</Fragment>;
    }
    return <th className="border py-1 px-3">{column.label}</th>;
  });

  const renderColumns = data.map((column) => {
    const renderCells = config.map((cell) => {
      return <td className="border py-1 px-3">{cell.render(column)}</td>;
    });
    return <tr>{renderCells}</tr>;
  });
  return (
    <div>
      <h1>Data Nilai Siswa kelas XII B</h1>
      <table className="mt-3">
        <thead>
          <tr>{renderHeader}</tr>
        </thead>
        <tbody>{renderColumns}</tbody>
      </table>
    </div>
  );
};

export default Table;
