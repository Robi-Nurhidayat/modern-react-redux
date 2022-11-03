import React from "react";

const ListItem = ({ todo, id }) => {
  return (
    <>
      <li>
        <form>
          <input disabled type="text" value={todo} />
        </form>
      </li>
    </>
  );
};

export default ListItem;
