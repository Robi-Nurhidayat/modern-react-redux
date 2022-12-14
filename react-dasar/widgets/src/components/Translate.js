import React, { useEffect, useState } from "react";
import Convert from "./Convert";
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
  const [text, setText] = useState("");
  const [tempText, setTempText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTempText(text);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  return (
    <div>
      <div className="ui form">
        <label className="label">Enter text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <DropDown
        label="Select a language"
        selected={language}
        onSetSelected={setSelectedLanguage}
        options={options}
      />
      <hr />

      <h3 className="ui header">Output</h3>
      <Convert text={tempText} language={language} />
    </div>
  );
};

export default Translate;
