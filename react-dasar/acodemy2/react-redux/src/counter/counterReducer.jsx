import { combineReducers } from "redux";

const counterReducer = (count = { count: 0 }, action) => {
  switch (action.type) {
    case "tambah":
      return { ...count, count: count.count + 10 };
    case "kurangi":
      return { ...count, count: count.count - 10 };
    default:
      return count;
  }
};

export default combineReducers({
  count: counterReducer,
});
