import React from "react";
import ListItem from "./ListItem";

const ListVideos = ({ videos }) => {
  const renderedVideo = videos.map((video, i) => {
    return <ListItem key={i} video={video} />;
  });
  return <div>{renderedVideo}</div>;
};

export default ListVideos;
