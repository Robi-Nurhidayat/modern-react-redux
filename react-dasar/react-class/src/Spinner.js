import React from "react";

const Spinner = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui text loader">{props.message}</div>
    </div>
  );
};

// membuat default props

Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
