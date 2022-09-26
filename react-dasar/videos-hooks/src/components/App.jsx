import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import useVideo from "./hooks/useVideo";
import ListVideos from "./ListVideos";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [video, search] = useVideo("node js");

  // useEffect(() => {
  //   setSelectedVideo(video[0]);
  // }, [video]);

  console.log(video);

  const onVideoSelected = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="container mx-auto mt-5">
      <SearchBar onTermSubmit={search} />
      <div className="grid grid-cols-2 mt-4 gap-x-6">
        <div>
          <VideoDetail selectedVideo={selectedVideo} />
        </div>
        <div>
          <ListVideos
            videos={video}
            onVideoSelected={(video) => onVideoSelected(video)}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
