import React, { useEffect, useRef, useState } from "react";
import { GoPlus, GoX } from "react-icons/go";

const Accordion = ({ options }) => {
  const [expend, setExpend] = useState(-1);
  const accRef = useRef();

  useEffect(() => {
    const collapse = (e) => {
      if (!accRef.current) {
        return;
      }
      if (accRef.current.contains(e.target)) {
        setExpend(-1);
      }
    };

    document.body.addEventListener("click", collapse, true);

    return () => {
      document.body.removeEventListener("click", collapse);
    };
  }, []);

  console.log(accRef);
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
      <div key={index}>
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
      <div ref={accRef}>{renderedOptions}</div>
    </div>
  );
};

export default Accordion;
