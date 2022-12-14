import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div>
      <li
        className="list-group-item video-item"
        onClick={() => onVideoSelect(video)}
      >
        <img alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <h1>{video.snippet.title}</h1>
      </li>
    </div>
  );
};

export default VideoItem;
