import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import youtube from "./youtube";

const App = () => {
  const [video, setVideo] = useState([]);
  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    const { items } = response.data;
    setVideo(items);
  };

  console.log(video);
  return (
    <div className="container mx-auto mt-5">
      <SearchBar onTermSubmit={onTermSubmit} />
    </div>
  );
};

export default App;
