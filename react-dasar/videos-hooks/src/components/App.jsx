import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import ListVideos from "./ListVideos";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import youtube from "./youtube";

const App = () => {
  const [video, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    const { items } = response.data;
    setVideo(items);
  };

  useEffect(() => {
    onTermSubmit("Node js");
    setSelectedVideo(video[0]);
  }, []);

  return (
    <div className="container mx-auto mt-5">
      <SearchBar onTermSubmit={onTermSubmit} />
      <div className="grid grid-cols-2 mt-4 gap-x-6">
        <div>
          <VideoDetail selectedVideo={selectedVideo} />
        </div>
        <div>
          <ListVideos videos={video} setSelectedVideo={setSelectedVideo} />
        </div>
      </div>
    </div>
  );
};

export default App;
