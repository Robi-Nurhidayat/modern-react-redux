import React from "react";
import { useSelector } from "react-redux";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  const renderPosts = () => {
    return posts.map((post, i) => {
      return (
        <div key={i} className="border mb-4 p-3 rounded">
          <h1 className="font-bold font-medium mb-1">{post.title}</h1>
          <p className="text-gray-400 font-normal">12 menit yang lalu</p>
          <p>{post.content}</p>
          <p className="text-gray-500">
            Ditulis oleh <span className="underline">{post.userId}</span>
          </p>
        </div>
      );
    });
  };
  return <div>{renderPosts()}</div>;
};

export default PostList;
