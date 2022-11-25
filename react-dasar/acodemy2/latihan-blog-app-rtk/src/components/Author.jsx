import React from "react";
import { useSelector } from "react-redux";

const Author = ({ userId }) => {
  const users = useSelector((state) => state.users);
  const findUserByUserId = users.find((user) => user.id === userId);
  console.log(findUserByUserId);
  return <span className="underline">{findUserByUserId.name}</span>;
};

export default Author;
