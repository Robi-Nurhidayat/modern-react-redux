import React, { useState } from "react";
import "./AnimalShow.css";
import bird from "../assets/svg/bird.svg";
import cat from "../assets/svg/cat.svg";
import cow from "../assets/svg/cow.svg";
import dog from "../assets/svg/dog.svg";
import gator from "../assets/svg/gator.svg";
import horse from "../assets/svg/horse.svg";
import heart from "../assets/svg/heart.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

const AnimalShow = ({ type }) => {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    if (click >= 5) return;
    setClick(click + 1);
  };
  return (
    <div onClick={handleClick} className="animal_container">
      <img className="animal" alt="animals" src={svgMap[type]} />
      <img
        alt="heart"
        src={heart}
        style={{ width: `${10 + 10 * click}px` }}
        className="heart"
      />
    </div>
  );
};

export default AnimalShow;
