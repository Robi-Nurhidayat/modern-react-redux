import React from "react";
import { connect } from "react-redux";
import { buttonAdd, buttonKurangi } from "../components/action";

const Counter = (props) => {
  return (
    <div>
      <button onClick={props.buttonAdd}>Tambah</button>
      <button onClick={props.buttonKurangi}>Kurangi</button>
      <span>{props.count}</span>
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateProps, { buttonAdd, buttonKurangi })(Counter);
