import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video, i) => {
    return <VideoItem key={i} video={video} onVideoSelect={onVideoSelect} />;
  });
  return (
    <div>
      <ul className="list-group">{renderedList}</ul>
    </div>
  );
};

export default VideoList;
