import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Feed = () => {
  const [selectcategory, setSelectCategory] = useState("Coding");
  return (
    <div className="flex flex-col">
      <div className=" py-2 flex overflow-auto">
        <Sidebar
          selectcategory={selectcategory}
          setSelectCategor={setSelectCategory}
        />
      </div>
      <div className="bg-gray-200">Videos</div>
    </div>
  );
};

export default Feed;
