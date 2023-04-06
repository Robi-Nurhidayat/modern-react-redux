import React from "react";
import CarForm from "./components/CarForm";
import CarLists from "./components/CarLists";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

const App = () => {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarLists />
      <CarValue />
    </div>
  );
};

export default App;
