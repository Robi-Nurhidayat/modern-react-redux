import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigator = useNavigate();
  return (
    <>
      <div>About</div>
      <button onClick={() => navigator("/contact", { replace: true })}>
        Contact Me
      </button>
    </>
  );
};

export default About;
