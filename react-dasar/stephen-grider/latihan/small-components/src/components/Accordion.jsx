import React, { useRef, useState } from "react";
import { GoPlus, GoX } from "react-icons/go";

const Accordion = ({ options }) => {
  const [expend, setExpend] = useState(-1);
  const accRef = useRef();
  const handleExpend = (index) => {
    if (expend === index) {
      setExpend((prev) => {
        return -1;
      });
    } else {
      setExpend(index);
    }
  };

  const renderedOptions = options.map((opt, index) => {
    const isExpend = index === expend;
    return (
      <div key={index} ref={accRef} className="accordion-container">
        <div
          onClick={() => handleExpend(index)}
          className="flex items-center justify-start gap-3 cursor-pointer"
        >
          {isExpend === true ? <GoX /> : <GoPlus />} <span>{opt.label}</span>
        </div>
        {isExpend &&
          opt.listMenu.map((menu, index) => {
            return (
              <ul key={index} className="flex flex-col ml-6 items-start">
                <li>{menu}</li>
              </ul>
            );
          })}
      </div>
    );
  });
  return (
    <div className="mt-8 border text-center">
      <h1>Collapsing Icon</h1>
      <p>Plus icon changes to X icon when mene expends.</p>
      <div>{renderedOptions}</div>
    </div>
  );
};

export default Accordion;
