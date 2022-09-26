import React, { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideo = (defaultSearchTerm) => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, []);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    const { items } = response.data;
    setVideo(items);
  };

  return [video, search];
};

export default useVideo;
