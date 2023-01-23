import React from "react";

import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import AccordionPages from "./pages/AccordionPages";
import DropdownPages from "./pages/DropdownPages";
import ButtonPages from "./pages/ButtonPages";
import Modalpages from "./pages/Modalpages";
import TablePages from "./pages/TablePages";

const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />

      <div className="cols-span-5">
        <Route path={"/accordion"}>
          <AccordionPages />
        </Route>
        <Route path={"/dropdown"}>
          <DropdownPages />
        </Route>
        <Route path={"/buttons"}>
          <ButtonPages />
        </Route>
        <Route path={"/modal"}>
          <Modalpages />
        </Route>
        <Route path={"/table"}>
          <TablePages />
        </Route>
      </div>
    </div>
  );
};

export default App;
