import React from "react";

export default function VideoDetail({ selectedVideo }) {
  if (!selectedVideo) {
    return <div>Loading ...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  console.log(selectedVideo);
  return (
    <div>
      <div>
        <iframe title="video player" src={videoSrc} />
      </div>
      <div>
        <h2> {selectedVideo.snippet.title}</h2>
        <p>{selectedVideo.snippet.description}</p>
      </div>
    </div>
  );
}
