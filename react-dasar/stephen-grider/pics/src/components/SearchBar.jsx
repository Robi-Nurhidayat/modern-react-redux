import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(term);
    onSubmit("cars");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
      </form>
    </div>
  );
};

export default SearchBar;
