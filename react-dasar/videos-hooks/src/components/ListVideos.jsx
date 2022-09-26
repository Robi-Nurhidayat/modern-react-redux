import React from "react";
import ListItem from "./ListItem";

const ListVideos = ({ videos, onVideoSelected }) => {
  const renderedVideo = videos.map((video, i) => {
    return <ListItem onVideoSelected={onVideoSelected} key={i} video={video} />;
  });
  return <div>{renderedVideo}</div>;
};

export default ListVideos;
