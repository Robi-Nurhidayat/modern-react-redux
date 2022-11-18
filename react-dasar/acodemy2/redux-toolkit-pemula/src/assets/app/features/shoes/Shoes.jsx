import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStock, buyShoes } from "./shoesSlice";

const Shoes = () => {
  const shoes = useSelector((state) => state.shoes.stock);
  const dispatch = useDispatch();
  console.log(shoes);
  const [addStockNumber, setAddStockNumber] = useState(0);
  const convertAddStockNumber = Number(addStockNumber);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Stok Sepatu : {shoes}</h2>
      <button style={{ margin: "10px" }} onClick={() => dispatch(buyShoes())}>
        Buy
      </button>
      {/* <button>Reset</button> */}
      <p>
        <input
          type={"number"}
          onChange={(e) => setAddStockNumber(e.target.value)}
          value={addStockNumber}
        />
        <button onClick={() => dispatch(addStock(convertAddStockNumber))}>
          Add
        </button>
      </p>
    </div>
  );
};

export default Shoes;
