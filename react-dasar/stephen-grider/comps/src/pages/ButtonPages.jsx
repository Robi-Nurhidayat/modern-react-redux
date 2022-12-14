import React from "react";
import Button from "../components/Button";

const ButtonPages = () => {
  const handleClick = () => {
    console.log("handle click");
  };

  const mouseHover = () => {
    console.log("Mouse Hover");
  };
  return (
    <div>
      <div>
        <Button primary rounded outline className="mb-5" onClick={handleClick}>
          Add
        </Button>
      </div>
      <div>
        <Button secondary onMouseEnter={handleClick}>
          Send
        </Button>
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

export default ButtonPages;
