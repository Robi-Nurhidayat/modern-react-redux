import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem video={video} />;
  });
  return (
    <div>
      <ul className="list-group">{renderedList}</ul>
    </div>
  );
};

export default VideoList;
