import React from "react";
import "./seasonDisplay.css";

const seasonConfig = {
  Summer: {
    text: "Let's hit the beach",
    iconName: "snowflake",
  },
  Winter: {
    text: "Burr, it is chilly",
    iconName: "sun",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonsDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className="container-season">
      <i className={"icon-left massive icon " + iconName}></i>
      <h1 className="heading">{text}</h1>
      <i className={"icon-right massive icon " + iconName}></i>
    </div>
  );
};

export default SeasonsDisplay;
