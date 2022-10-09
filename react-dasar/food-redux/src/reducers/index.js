import { combineReducers } from "redux";

const foodListReducer = () => {
  return [
    {
      name: "Fish Grill",
      desc: "this is a food an cooking in grill",
    },
    {
      name: "Fried Chicken",
      desc: "fried chicken is a food which to cooking with oil hot",
    },
  ];
};

const selectFoodReducer = (food = null, action) => {
  if (action.type === "SELECT_FOOD") {
    return action.payload;
  }

  return food;
};

export default combineReducers({
  foods: foodListReducer,
  select: selectFoodReducer,
});
