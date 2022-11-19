import React from "react";

import PostList from "./app/post/PostList";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <section className="max-w-2xl mx-auto pt-6">
        <PostList />
      </section>
    </div>
  );
};

export default App;
