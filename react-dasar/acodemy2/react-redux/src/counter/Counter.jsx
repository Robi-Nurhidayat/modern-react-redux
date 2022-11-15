import React from "react";
import { connect } from "react-redux";
import { addCount } from "./action";

const Counter = (props) => {
  console.log(props);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Count - {props.count.count}</h1>
      <button onClick={props.addCount}>Add</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(addCount),
//   };
// };

export default connect(mapStateToProps, { addCount })(Counter);
