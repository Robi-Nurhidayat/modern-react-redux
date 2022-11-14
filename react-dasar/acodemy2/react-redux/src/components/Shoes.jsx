import React from "react";
import { connect } from "react-redux";
import { BUY_SHOES } from "../redux/shoes/ShoesType";

const Shoes = (props) => {
  console.log(props);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Jumlah Sepatu - {props.shoes}</h1>
      <button onClick={props.BuyShoes}>Buy</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shoes: state.stock,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    BuyShoes: () => dispatch({ type: BUY_SHOES }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Shoes);
