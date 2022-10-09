import React from "react";
import { connect } from "react-redux";
import { selectFood } from "../action";

class FoodList extends React.Component {
  renderedList() {
    return this.props.foods.map((foods) => {
      return (
        <div key={foods.name}>
          <div>
            <button onClick={() => this.props.selectFood(foods)}>Select</button>
          </div>
          <div>{foods.name}</div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderedList()}</div>;
  }
}

const mapPropsState = (state) => {
  console.log(state);
  return {
    foods: state.foods,
  };
};

export default connect(mapPropsState, { selectFood })(FoodList);
