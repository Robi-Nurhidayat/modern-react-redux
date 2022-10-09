import React from "react";

import { combineReducers } from "redux";

const countReducer = (count = 0, action) => {
  if (action.type === "increment") {
    return count + 1;
  }
  if (action.type === "decrement") {
    return count - 1;
  }

  return count;
};

export default combineReducers({
  count: countReducer,
});
