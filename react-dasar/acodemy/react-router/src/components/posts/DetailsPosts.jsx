import React from "react";
import { useParams } from "react-router-dom";

const DetailsPosts = () => {
  const params = useParams();
  return (
    <div>
      <h1>Judul Post {params.postId}</h1> <h2>Detail Post {params.postId}</h2>
    </div>
  );
};

export default DetailsPosts;
