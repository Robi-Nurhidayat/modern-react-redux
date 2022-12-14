import React from "react";
import Accordion from "./components/Accordion";
import ButtonPages from "./pages/ButtonPages";

const App = () => {
  const items = [
    {
      id: "asdsdf",
      label: "Belajar React js",
      content:
        "Anda dapat belajar react js dengan siapapun.Anda dapat belajar react js dengan siapapun.Anda dapat belajar react js dengan siapapun.",
    },
    {
      id: "sssssss",
      label: "Belajar Angular js",
      content:
        "Anda dapat belajar react js dengan siapapun.Anda dapat belajar react js dengan siapapun.Anda dapat belajar react js dengan siapapun.",
    },
    {
      id: "cccccc",
      label: "Belajar Vue js",
      content:
        "Anda dapat belajar react js dengan siapapun.Anda dapat belajar react js dengan siapapun.Anda dapat belajar react js dengan siapapun.",
    },
  ];
  return <Accordion items={items} />;
};

export default App;
