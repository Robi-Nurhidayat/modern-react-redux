import React from "react";
import "./Header.css";

const Header = () => {
  const navMenus = [
    { label: "Home" },
    { label: "Featured" },
    { label: "Service" },
    { label: "Contact Us" },
  ];

  const renderedNavMenus = navMenus.map((menu) => {
    return (
      <li
        key={menu.label}
        className="hover:text-xl cursor-pointer transition-all 0.5"
      >
        {menu.label}
      </li>
    );
  });
  return (
    <header className="header w-full">
      <div className="relative px-16 py-9 border flex justify-between items-center">
        <div>
          <span className="text-4xl text-white font-bold">Travyuk</span>
        </div>

        <nav>
          <ul className="flex gap-7 text-base">{renderedNavMenus}</ul>
        </nav>

        <div className="flex">
          <button className="py-3 px-7 text-base">Sign In</button>
          <button className="py-3 px-7 bg-blue-600 rounded-xl text-white font-semibold text-base">
            Sign Up
          </button>
        </div>
      </div>

      <div className="hero-text-continer flex justify-center font-semibold text-2xl text-gray-300 mt-40">
        <p>life is too short for a wide and beautiful world</p>
      </div>

      <div
        className=" text-white font-bold text-center mx-auto mt-3"
        style={{ maxWidth: "81.5rem" }}
      >
        <p className="text-6xl">
          Enjoy Your Tour With Heavenly experience you've never had
        </p>
      </div>
    </header>
  );
};

export default Header;
