import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="border pl-6 pt-5 text-2xl font-bold ">
      <div>
        <div>
          <NavLink to={"/dashoard"}>
            <span>LOGO</span>
          </NavLink>
        </div>
      </div>
      <div className=" flex flex-col text-lg gap-2">
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
        <NavLink to={"mahasiswa"}>Mahasiswa</NavLink>
        <NavLink>Matakuliah</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
