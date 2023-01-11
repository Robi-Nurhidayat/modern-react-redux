import React from "react";

const Header = () => {
  return (
    <header className="w-full">
      <div className=" px-16 py-9 border flex justify-between items-center">
        <div>
          <span className="text-4xl">Travyuk</span>
        </div>

        <nav>
          <ul className="flex gap-7 text-base">
            <li>Home</li>
            <li>Featured</li>
            <li>Service</li>
            <li>Contact Us</li>
          </ul>
        </nav>

        <div className="flex">
          <button className="py-3 px-7 text-base">Sign In</button>
          <button className="py-3 px-7 bg-blue-600 rounded-xl text-white font-semibold text-base">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
