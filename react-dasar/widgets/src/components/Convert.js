import React, { useEffect } from "react";

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log("Language or text");
  }, [language, text]);
  return <></>;
};

export default Convert;
