import React from "react";
import { useState } from "react";

const ImageSearch = ({ setTerm }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    setTerm(text);
  };
  return (
    <div className="mb-6 text-center mt-6">
      <form onSubmit={onSubmit}>
        <input
          type={"text"}
          className="border outline-none px-6 py-2.5 rounded"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button className="bg-blue-500 px-6 py-2.5 rounded ml-1 text-white font-bold">
          Search
        </button>
      </form>
    </div>
  );
};

export default ImageSearch;
