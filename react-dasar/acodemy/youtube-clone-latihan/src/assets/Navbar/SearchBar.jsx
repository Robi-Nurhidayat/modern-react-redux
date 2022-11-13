import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="flex justify-between p-4 items-center">
      <div>
        <Link>YOUTUBE</Link>
      </div>
      <form className="flex items-center gap-2">
        <input
          className="px-2 py-1 border rounded text-black-100"
          type={"text"}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button className="px-2 py-1 bg-gray-500 rounded text-white">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
