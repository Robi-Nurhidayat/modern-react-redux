import React from "react";

const City = ({ city, addCity }) => {
  console.log("city di redner");
  return (
    <div style={{ textAlign: "center" }}>
      {city.map((c, i) => {
        return <div key={i}>{c}</div>;
      })}

      <button onClick={addCity}>Add</button>
    </div>
  );
};

export default React.memo(City);
