import React from "react";

const VideoCard = ({ video }) => {
  const { id, snippet } = video;

  return (
    <div>
      <img src={snippet.thumbnails.high.url} alt="thumbnails" />
      <h1 className="font-md">{snippet.title}</h1>
      <p>{snippet.channelTitle}</p>
    </div>
  );
};

export default VideoCard;
