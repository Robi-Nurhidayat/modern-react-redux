import React from "react";
import { connect } from "react-redux";
import { selectFood } from "../action";

const FoodList = (props) => {
  const renderedFood = helperFunction(props.foods);
  return (
    <div>
      <ul>{renderedFood}</ul>
    </div>
  );
};

const helperFunction = (foods) => {
  return foods.map((food) => {
    return <li key={food.name}>{food.name}</li>;
  });
};

const mapPropsState = (state) => {
  console.log(state);
  return {
    foods: state.foods,
  };
};

export default connect(mapPropsState)(FoodList);
