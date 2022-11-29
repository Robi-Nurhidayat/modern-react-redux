import React, { useState } from "react";
import "./App.css";
import AnimalShow from "./components/AnimalShow";

const getRandomAnimals = () => {
  const animals = ["bird", "cat", "dog", "cow", "horse", "gator"];

  return animals[Math.floor(Math.random() * animals.length)];
};

const App = () => {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimals()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
};

export default App;
