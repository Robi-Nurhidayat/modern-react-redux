import React from "react";

export default function ListItem({ video }) {
  return (
    <>
      <div className="card mb-4 grid grid-cols-2 p-2 gap-x-2.5">
        <div className="card--images">
          <img
            className="w-5/5"
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.description}
          />
        </div>
        <div className="card--title">
          <h3 className="text-xs">{video.snippet.title}</h3>
          <p>{video.snippet.channelTitle}</p>
        </div>
      </div>
    </>
  );
}
