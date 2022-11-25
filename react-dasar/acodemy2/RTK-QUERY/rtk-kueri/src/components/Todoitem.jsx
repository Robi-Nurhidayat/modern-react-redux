import React from "react";

const Todoitem = ({ todo }) => {
  return (
    <li>
      <div>
        <input type={"checkbox"} className="checkbox" />
        {todo.title}
      </div>
      <button className="delete">Delete</button>
    </li>
  );
};

export default Todoitem;
