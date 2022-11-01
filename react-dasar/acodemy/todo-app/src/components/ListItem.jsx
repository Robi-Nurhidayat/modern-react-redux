import React from "react";

function ListItem({ food }) {
  return (
    <>
      <li className="todo-item">
        <form className="form-edit">
          <input
            disabled
            type="text"
            className="input-no-border"
            value={food}
          />
        </form>
        <button className="btn btn__action btn__action-edit">Edit</button>
        <button className="btn btn__action btn__action-delete">Hapus</button>
      </li>
    </>
  );
}

export default ListItem;
