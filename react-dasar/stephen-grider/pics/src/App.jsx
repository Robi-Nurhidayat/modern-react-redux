import React from "react";
import searchImages from "./api";
import SearchBar from "./components/SearchBar";

const App = () => {
  const handleSubmit = (term) => {
    searchImages(term);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
