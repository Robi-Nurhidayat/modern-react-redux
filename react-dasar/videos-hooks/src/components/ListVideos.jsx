import React from "react";
import ListItem from "./ListItem";

const ListVideos = ({ videos, setSelectedVideo }) => {
  const renderedVideo = videos.map((video, i) => {
    return (
      <ListItem setSelectedVideo={setSelectedVideo} key={i} video={video} />
    );
  });
  return <div>{renderedVideo}</div>;
};

export default ListVideos;
