import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={pageOne} />
        <Route path="/pagetwo" component={pageTwo} />
      </BrowserRouter>
    </div>
  );
}

const pageOne = () => {
  return <div>Page One</div>;
};

const pageTwo = () => {
  return (
    <div>
      Page two <button>Click Me!</button>
    </div>
  );
};
export default App;
