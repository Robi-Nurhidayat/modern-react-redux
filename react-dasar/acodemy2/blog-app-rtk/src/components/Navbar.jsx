import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-16 h-16 items-center bg-blue-400 text-white">
      <h1 className="text-2xl font-medium">MyBlog</h1>
      <div className="flex justify-between gap-7">
        <Link>Home</Link>
        <Link>Post</Link>
      </div>
    </nav>
  );
};

export default Navbar;
