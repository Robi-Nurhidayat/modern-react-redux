import React from "react";
import { useSelector } from "react-redux";

const PostList = () => {
  const posts = useSelector((state) => state.post);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div className="border rounded p-6 mb-5" key={post.id}>
            <h2 className="text-lg font-bold">{post.title}</h2>
            <p className="text-sm text-gray-500">3 menit yang lalu</p>
            <p className="py-3">{post.content.substring(0, 10)}</p>
            <p className="text-sm text-gray-500">
              Di tulis oleh <span className="underline">Kevin</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
