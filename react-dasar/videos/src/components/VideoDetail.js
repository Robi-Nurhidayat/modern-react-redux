import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <h2> {video.snippet.title}</h2>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
