import React from "react";
import FormAdd from "./FormAdd";

const Todolist = () => {
  return (
    <div>
      <FormAdd />
      <ul>
        <li>
          <div>
            <input type={"checkbox"} className="checkbox" />
            Todo
          </div>
          <button className="delete">Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default Todolist;
