import axios from "axios";
import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

const ContainerVideos = ({ menu }) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      q: `${menu}`,
      part: "snippet,id",

      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": "08cdef9ef6msh20046dfe1bfeac2p19e469jsn4a28817a861c",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    try {
      const getVideo = async () => {
        const { data } = await axios.request(options);
        setVideos(data.items);
      };

      getVideo();
    } catch (e) {}
  }, [menu]);

  console.log(videos);
  return (
    <div className="grow">
      <VideoCard />
    </div>
  );
};

export default ContainerVideos;
