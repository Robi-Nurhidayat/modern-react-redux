import React from "react";

const Sidebar = ({ setMenu, sidebarMenu, menu }) => {
  return (
    <div className="grow-0">
      <ul>
        {sidebarMenu.map((menu, i) => {
          return (
            <li key={i}>
              <button
                className="cursor-pointer"
                onClick={() => setMenu(menu.menu)}
              >
                {menu.menu}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
