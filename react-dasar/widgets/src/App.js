import { useState } from "react";
import Accordion from "./components/Accordion";
import DropDown from "./components/Dropdown";
import Header from "./components/Header";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
  {
    title: "Apa itu React js",
    content: "React adalah librari yang digunakan untuk membangun UI",
  },
  {
    title: "Mengapa React",
    content: "React merupkan librari frontend populer",
  },
  {
    title: "Bagaimana cara menggunakan react",
    content: "React dibangun dengan menggunakan prinsip component",
  },
];

function App() {
  const options = [
    {
      label: "The Color Red",
      value: "red",
    },
    {
      label: "The Color Green",
      value: "greed",
    },
    {
      label: "A Shade of Blue",
      value: "blue",
    },
  ];
  const [selected, setSelected] = useState(options[0]);
  // const [showDropDown, setShowDropDown] = useState(true);

  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/dropdown">
        <DropDown
          selected={selected}
          onSetSelected={setSelected}
          options={options}
          label="Select a color"
        />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
