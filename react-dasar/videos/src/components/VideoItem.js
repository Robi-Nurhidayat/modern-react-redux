import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div>
      <img src={video.snippet.thumbnails.medium.url} />
      <h1>{video.snippet.title}</h1>
    </div>
  );
};

export default VideoItem;
