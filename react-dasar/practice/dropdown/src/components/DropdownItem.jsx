import React from "react";
import { Dropdown } from "react-bootstrap";

const DropdownItem = ({ options, selected, setSelected }) => {
  const renderedItem = options.map((val) => {
    if (selected.label === val.label) {
      return null;
    }
    return (
      <Dropdown.Item
        key={val.value}
        href="#/action-1"
        onClick={() => setSelected(val)}
      >
        {val.label}
      </Dropdown.Item>
    );
  });
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selected.label}
        </Dropdown.Toggle>

        <Dropdown.Menu>{renderedItem}</Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownItem;
