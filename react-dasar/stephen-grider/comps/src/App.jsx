import React from "react";

import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import AccordionPages from "./pages/AccordionPages";
import DropdownPages from "./pages/DropdownPages";
import ButtonPages from "./pages/ButtonPages";

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
      </div>
    </div>
  );
};

export default App;
