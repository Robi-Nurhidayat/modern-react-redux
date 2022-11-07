import React from "react";
import { categories } from "../../utils/utility";

const Sidebar = ({ selectcategory, setSelectCategor }) => {
  return (
    <>
      {categories.map((category) => {
        return (
          <button
            key={category.name}
            className="flex items-center flex-row-reverse p-2 gap-0.5 "
          >
            <span>{category.name}</span>
            <span>{category.icon}</span>
          </button>
        );
      })}
    </>
  );
};

export default Sidebar;
