import React, { useState } from "react";
import Sidebar from "../Navbar/Sidebar";
import ContainerVideos from "./ContainerVideos";

const Feed = () => {
  const [menu, setMenu] = useState("CODING");
  return (
    <div className="p-4 gap-6 flex">
      <Sidebar />
      <ContainerVideos />
    </div>
  );
};

export default Feed;
