import React from "react";
import { connect } from "react-redux";
import { gloveAction } from "../redux/gloves/gloveAction";

const Gloves = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Buy GLOVES - {props.stock}</h1>
      <button onClick={props.buyGloves}>Buy</button>
    </div>
  );
};

const mapStateToPros = (state) => {
  return {
    stock: state.gloves.stock,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyGloves: () => dispatch({ type: "BUY_GLOVES" }),
  };
};

export default connect(mapStateToPros, mapDispatchToProps)(Gloves);
