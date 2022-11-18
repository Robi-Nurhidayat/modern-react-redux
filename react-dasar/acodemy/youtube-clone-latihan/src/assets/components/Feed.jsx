import React, { useState } from "react";
import Sidebar from "../Navbar/Sidebar";
import ContainerVideos from "./ContainerVideos";

const Feed = () => {
  const sidebarMenu = [
    { menu: "CODING" },
    { menu: "FOOD" },
    { menu: "TECH" },
    { menu: "JAVA" },
  ];
  const [menu, setMenu] = useState("CODING");
  console.log(menu);
  return (
    <div className="p-4 gap-6 flex">
      <Sidebar setMenu={setMenu} sidebarMenu={sidebarMenu} menu={menu} />
      <ContainerVideos menu={menu} />
    </div>
  );
};

export default Feed;
