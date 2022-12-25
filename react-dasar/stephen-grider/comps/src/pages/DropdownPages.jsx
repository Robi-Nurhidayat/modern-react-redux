import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

const DropdownPages = () => {
  const [selection, setSelection] = useState(null);
  const handleSelection = (option) => {
    setSelection(option);
  };
  const options = [
    {
      label: "Red",
      value: "Red",
    },
    {
      label: "Blue",
      value: "Blue",
    },
    {
      label: "Black",
      value: "Black",
    },
  ];
  return (
    <div className="flex">
      <Dropdown
        options={options}
        onChange={handleSelection}
        value={selection}
      />
      <Dropdown
        options={options}
        onChange={handleSelection}
        value={selection}
      />
    </div>
  );
};

export default DropdownPages;
