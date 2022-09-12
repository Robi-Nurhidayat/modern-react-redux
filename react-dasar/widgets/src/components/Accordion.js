import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const ontTitleClick = (index) => {
    setActiveIndex(index);
  };

  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  const renderedItem = items.map((item, index) => {
    const active = activeIndex === index ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => ontTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`title ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderedItem} <h1>{activeIndex}</h1>
      <button onClick={handleCount}>Klik</button>
      <h1>Curren number :{count}</h1>
    </div>
  );
};

export default Accordion;
