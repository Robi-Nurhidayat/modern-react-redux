import React from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigator = useNavigate();
  return (
    <>
      <div>Contact</div>
      <button onClick={() => navigator(-2)}>Back</button>
    </>
  );
};

export default Contact;
