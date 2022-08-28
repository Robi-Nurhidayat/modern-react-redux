import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonsDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  return (
    <div>
      {season === "Winter" ? "Burr, it is chilly" : "Let's hit the beach"}
    </div>
  );
};

export default SeasonsDisplay;
