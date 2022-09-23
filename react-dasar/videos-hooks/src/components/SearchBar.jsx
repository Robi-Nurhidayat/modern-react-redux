import React, { useState } from "react";
import "./SearchBar.css";

export default function ({ onTermSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    onTermSubmit(inputValue);
  };
  return (
    <div className="flex justify-center">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-input mr-2 px-1 py-1 border-2 rounded"
          placeholder="Programing"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-transparent outline-2 outline-blue-500 font-semibold text-base"
        >
          Search
        </button>
      </form>
    </div>
  );
}
