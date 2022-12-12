import React from "react";
import Button from "./assets/components/Button";

const App = () => {
  return (
    <div>
      <div>
        <Button primary>Add</Button>
      </div>
      <div>
        <Button secondary>Send</Button>
      </div>
      <div>
        <Button success>Push</Button>
      </div>
      <div>
        <Button warning>Get</Button>
      </div>
      <div>
        <Button danger>Get</Button>
      </div>
    </div>
  );
};

export default App;
