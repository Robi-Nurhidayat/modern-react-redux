import React from "react";
import Accordion from "./components/Accordion";
import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPages from "./pages/AccordionPages";
import DropdownPages from "./pages/DropdownPages";

const App = () => {
  return (
    <div>
      <Link to={"/acc"}>Accordion</Link>
      <Link to={"/drop"}>Dropdown</Link>

      <div>
        <Route path={"/acc"}>
          <AccordionPages />
        </Route>
        <Route path={"/drop"}>
          <DropdownPages />
        </Route>
      </div>
    </div>
  );
};

export default App;
