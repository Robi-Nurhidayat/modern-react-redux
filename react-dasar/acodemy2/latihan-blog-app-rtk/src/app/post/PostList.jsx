import React from "react";
import { useSelector } from "react-redux";
import Author from "../../components/Author";
import TimeAgo from "../../components/TimeAgo";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  const renderPosts = () => {
    return posts.map((post, i) => {
      return (
        <div key={i} className="border mb-4 p-3 rounded">
          <h1 className="font-bold font-medium mb-1">{post.title}</h1>
          <TimeAgo time={post.time} />
          <p>{post.content}</p>
          <p className="text-gray-500">
            Ditulis oleh <Author userId={post.userId} />
          </p>
        </div>
      );
    });
  };
  return <div>{renderPosts()}</div>;
};

export default PostList;
