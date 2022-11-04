import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import jsonPlaceholderApi from "./jsonPlaceholderApi";
import axios from "axios";

export default function JsonPlaceHolder() {
  const [data] = jsonPlaceholderApi();

  console.log(data);
  const renderData = () => {
    return data.map((data) => {
      return <p key={data.id}>{data.name}</p>;
    });
  };
  return (
    <div>
      {/* {data.map((data) => (
        <p key={data.id}>{data.name}</p>
      ))} */}

      {data && renderData()}
    </div>
  );
}
