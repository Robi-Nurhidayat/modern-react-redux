import React from "react";

const City = ({ city }) => {
  console.log("city di redner");
  return (
    <>
      {city.map((c) => {
        return <div key={c}>{c}</div>;
      })}
    </>
  );
};

export default React.memo(City);
