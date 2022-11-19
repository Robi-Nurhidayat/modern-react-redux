import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  const posts = useSelector((state) => state.post);
  console.log(posts);
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
