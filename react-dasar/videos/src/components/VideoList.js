import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem video={video} />;
  });
  return (
    <div>
      {renderedList}
      test
    </div>
  );
};

export default VideoList;
