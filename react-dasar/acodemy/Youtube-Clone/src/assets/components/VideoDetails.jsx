import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../../utils/fetchApi";

const VideoDetails = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [videoSuggest, setVideoSuggest] = useState([]);

  useEffect(() => {
    fetchApi(`videos?part=contentDetails,snippet,statistics&id=${id}`).then(
      (data) => {
        setVideoDetails(data.items[0]);
      }
    );

    fetchApi(`search?part=id,snippet&type=video&relatedToVideoId=${id}`).then(
      (data) => {
        setVideoSuggest(data.items);
      }
    );
  }, [id]);

  console.log(videoSuggest);
  return <div>VideoDetails</div>;
};

export default VideoDetails;
