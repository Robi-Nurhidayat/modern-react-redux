import React from "react";
import { useSelector } from "react-redux";

const Author = ({ userId }) => {
  const users = useSelector((state) => state.users);
  const findUser = users.find((user) => user.id === userId);

  return (
    <>
      <span className="underline">{findUser.username}</span>
    </>
  );
};

export default Author;
