import { useState } from "react";
import Accordion from "./components/Accordion";
import DropDown from "./components/Dropdown";
import Search from "./components/Search";

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

  return (
    <div className="ui container">
      <DropDown
        selected={selected}
        onSetSelected={setSelected}
        options={options}
      />
    </div>
  );
}

export default App;
