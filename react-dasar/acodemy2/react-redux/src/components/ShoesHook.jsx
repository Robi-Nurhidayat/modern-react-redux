import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BUY_SHOES } from "../redux/shoes/ShoesType";

const ShoesHook = (props) => {
  const selector = useSelector((state) => {
    return {
      stock: state.stock,
    };
  });

  const dispatch = useDispatch();
  console.log(props);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Jumlah Sepatu Hook- {selector.stock}</h1>
      <button onClick={() => dispatch({ type: BUY_SHOES })}>Buy</button>
    </div>
  );
};

export default ShoesHook;
