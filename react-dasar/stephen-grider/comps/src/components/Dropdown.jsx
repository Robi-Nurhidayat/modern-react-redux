import React, { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();
  const handleClick = () => {
    setIsOpen((current) => !current);
  };

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClickOption = (option) => {
    setIsOpen(false);

    onChange(option);
  };

  const renderOptions = options.map((opt) => {
    // if (opt.label === selection?.label) {
    //   return null;
    // }
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleClickOption(opt)}
        key={opt.value}
      >
        {opt.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select ..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderOptions}</Panel>}
    </div>
  );
};

export default Dropdown;
