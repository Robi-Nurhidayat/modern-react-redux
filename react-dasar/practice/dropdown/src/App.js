import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownItem from "./components/DropdownItem";

const App = () => {
  const options = [
    {
      label: "Indonesian",
      value: "id",
    },
    {
      label: "Arabic",
      value: "ar",
    },
    {
      label: "Hindi",
      value: "hi",
    },
  ];

  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <DropdownItem
        selected={selected}
        setSelected={setSelected}
        options={options}
      />
    </div>
  );
};

export default App;
