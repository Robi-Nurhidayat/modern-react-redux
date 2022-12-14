import React from "react";
import { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Parent from "./components/UseContext/Parent";
import Temp from "./Temp";

export const nameContext = createContext();

ReactDOM.createRoot(document.getElementById("root")).render(
  <nameContext.Provider value={{ nama: "Robi Nurhidayat", umur: 23 }}>
    <Temp />
  </nameContext.Provider>
);
