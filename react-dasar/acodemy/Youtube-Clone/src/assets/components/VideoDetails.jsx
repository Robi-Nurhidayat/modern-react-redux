import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../../utils/fetchApi";
import ReactPlayer from "react-player";

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

  console.log(videoDetails);
  return (
    <div className="flex flex-col md:flex-row">
      <div className="grow md:basis-9/12 lg:basis-8/12">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          className="h-full"
          width={"100%"}
        />
        <div className="p-4">
          <h1 className="text-lg font-medium">{videoDetails?.snippet.title}</h1>
          <p className="mb-4">{videoDetails?.statistics.viewCount} views</p>
          <hr />

          <p>{videoDetails?.snippet.description}</p>
        </div>
      </div>
      <div className="md:basis-3/12 lg:basis-4/12">Video Suggest</div>
    </div>
  );
};

export default VideoDetails;
