import React from "react";
import { useSelector } from "react-redux";

const Shoes = () => {
  const shoes = useSelector((state) => state.shoes.stock);
  console.log(shoes);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Stok Sepatu : {shoes}</h2>
      <button style={{ margin: "10px" }}>Buy</button>
      <button>Reset</button>
    </div>
  );
};

export default Shoes;
