import React from "react";

const Confirm = ({ values, prevStep }) => {
  return (
    <div>
      <h1>CONFIRM YOUR DATA</h1>
      <ul>
        <li>firstName : {values.firstName}</li>
        <li>lastName : {values.lastName}</li>
        <li>email : {values.email}</li>
        <li>occupation :{values.occupation} </li>
        <li>city : {values.city}</li>
        <li>bio : {values.bio}</li>
      </ul>
    </div>
  );
};

export default Confirm;
