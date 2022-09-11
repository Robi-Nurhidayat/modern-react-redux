import Accordion from "./components/Accordion";

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
  return (
    <div>
      <Accordion />
    </div>
  );
}

export default App;
