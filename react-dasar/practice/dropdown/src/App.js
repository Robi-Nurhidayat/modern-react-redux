import React from "react";
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
  return (
    <div>
      <DropdownItem options={options} />
    </div>
  );
};

export default App;
