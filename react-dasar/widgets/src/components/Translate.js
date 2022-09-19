import React, { useState } from "react";
import DropDown from "./Dropdown";

const Translate = () => {
  const options = [
    {
      label: "Africa",
      value: "af",
    },
    {
      label: "Indonesian",
      value: "id",
    },
    {
      label: "Arabic",
      value: "ar",
    },
  ];
  const [language, setSelectedLanguage] = useState(options[0]);
  return (
    <div>
      <DropDown
        label="Select a language"
        selected={language}
        onSetSelected={setSelectedLanguage}
        options={options}
      />
    </div>
  );
};

export default Translate;
