import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={pageOne} />
        <Route path="/pagetwo" component={pageTwo} />
      </Router>
    </div>
  );
}

const pageOne = () => {
  return <div>Page One</div>;
};

const pageTwo = () => {
  return (
    <div>
      <p>Page Two</p>
      <button>Click Me</button>
    </div>
  );
};

export default App;
