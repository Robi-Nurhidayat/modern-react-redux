import React from "react";
import { useSelector } from "react-redux";
import Author from "../../components/Author";
import TimeAgo from "../../components/TimeAgo";

const PostList = () => {
  const posts = useSelector((state) => state.post);
  console.log(posts);
  return (
    <div>
      {posts.map((post) => {
        return (
          <div className="border rounded p-6 mb-5" key={post.id}>
            <h2 className="text-lg font-bold">{post.title}</h2>

            <TimeAgo timestamp={post.date} />

            <p className="py-3">{post.content.substring(0, 10)}</p>
            <p className="text-sm text-gray-500">
              Di tulis oleh <Author userId={post.userId} />
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
