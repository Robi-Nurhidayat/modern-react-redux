import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-16 h-16 items-center bg-blue-400 text-white">
      <Link to={"/"}>
        {" "}
        <h1 className="text-2xl font-medium">MyBlog</h1>
      </Link>
      <div className="flex justify-between gap-7">
        <Link to={"/"}>Home</Link>
        <Link to={"/add-post"}>Post</Link>
      </div>
    </nav>
  );
};

export default Navbar;
