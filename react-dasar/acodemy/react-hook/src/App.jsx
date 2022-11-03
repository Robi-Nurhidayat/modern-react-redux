import React, { useReducer, useRef } from "react";
import { useState } from "react";

const App = () => {
  // const [angka, setAngka] = useState(0);
  // const btnRef = useRef(0);

  // console.log("komponen di render");
  // console.log(btnRef);
  // return (
  //   <div>
  //     <button
  //       onClick={() => {
  //         setAngka(angka + 1);
  //         console.log(btnRef.current);
  //       }}
  //       ref={btnRef}
  //     >
  //       Hello
  //     </button>
  //   </div>
  // );

  function reducer(state, action) {
    if (action.type === "INCREMENT") {
      return state + 1;
    }
    if (action.type === "DECREMENT") {
      return state - 1;
    }

    return 0;
  }

  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <div style={{ textAlign: "center", maxWidth: "300px", margin: "auto" }}>
      <h1>{counter}</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Kurangi</button>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Tambah</button>
      </div>
    </div>
  );
};

export default App;
