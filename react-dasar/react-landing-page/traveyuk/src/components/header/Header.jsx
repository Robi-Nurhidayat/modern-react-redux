import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header w-full">
      <div className="bg-header"></div>
      <div className="relative px-16 py-9 border flex justify-between items-center">
        <div className="nav-bg"></div>
        <div>
          <span className="text-4xl text-white font-bold">Travyuk</span>
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

      <div className="hero-text-continer flex justify-center font-semibold text-2xl">
        <p>life is too short for a wide and beautiful world</p>
      </div>
    </header>
  );
};

export default Header;
