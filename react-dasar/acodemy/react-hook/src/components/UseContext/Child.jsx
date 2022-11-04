import React, { useContext } from "react";
import { nameContext } from "../../main";

const Child = () => {
  const context = useContext(nameContext);
  return (
    <div>
      {context.nama} - {context.umur}
    </div>
  );
};

export default Child;
