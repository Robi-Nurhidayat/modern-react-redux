import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";

const App = () => {
  const [video, setVideo] = useState([]);
  const onTermSubmit = (video) => {
    setVideo(video);
  };

  return (
    <div className="container mx-auto mt-5">
      <SearchBar onTermSubmit={onTermSubmit} />
    </div>
  );
};

export default App;
