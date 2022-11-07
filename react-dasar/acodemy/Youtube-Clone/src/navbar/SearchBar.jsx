import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const SearchBar = () => {
  return (
    <form className="relative">
      <input
        type={"text"}
        className="outline-none p-2 rounded-full text-sm border w-50 sm:w-80"
      />
      <button>
        <MagnifyingGlassIcon className="text-gray-400 h-7 absolute top-1 right-2 bg-white" />
      </button>
    </form>
  );
};

export default SearchBar;
