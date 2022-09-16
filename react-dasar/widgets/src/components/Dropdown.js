import React from "react";

const DropDown = ({ options, selected, onSetSelected }) => {
  const renderedItem = options.map((option) => {
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSetSelected(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className="menu visible transition">{renderedItem}</div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
