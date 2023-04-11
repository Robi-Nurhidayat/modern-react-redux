import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store";

const UserLists = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return <div>UserLists</div>;
};

export default UserLists;
