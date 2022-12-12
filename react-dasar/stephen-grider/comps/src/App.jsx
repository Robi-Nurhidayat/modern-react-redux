import React from "react";
import Button from "./assets/components/Button";

const App = () => {
  return (
    <div>
      <div>
        <Button secondary primary>
          Add
        </Button>
      </div>
      <div>
        <Button>Send</Button>
      </div>
      <div>
        <Button>Push</Button>
      </div>
      <div>
        <Button>Get</Button>
      </div>
    </div>
  );
};

export default App;
