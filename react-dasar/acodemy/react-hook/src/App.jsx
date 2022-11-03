import React, { useRef } from "react";
import { useState } from "react";

const App = () => {
  const [angka, setAngka] = useState(0);
  const btnRef = useRef(0);

  console.log("komponen di render");
  console.log(btnRef);
  return (
    <div>
      <button
        onClick={() => {
          setAngka(angka + 1);
          console.log(btnRef.current);
        }}
        ref={btnRef}
      >
        Hello
      </button>
    </div>
  );
};

export default App;
