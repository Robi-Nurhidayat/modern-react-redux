import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
  return (
    <div>
      <p>Page One</p>
      <Link to="/pagetwo">Page Two</Link>
    </div>
  );
};

const pageTwo = () => {
  return (
    <div>
      <p>Page Two</p>
      <button>Click Me</button>
      <Link to="/">Page One</Link>
    </div>
  );
};

export default App;
