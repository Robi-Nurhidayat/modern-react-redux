import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-8 py-4 bg-blue-300 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-white">RobiBlog</h1>
      <div className="text-white font-bold text-md flex justify-between gap-5">
        <Link to="/">Home</Link>
        <Link to="/add-post">Post</Link>
      </div>
    </div>
  );
};

export default Navbar;
