import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Skeleton from "./Skeleton";

const UserLists = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <Skeleton className={"h-10 w-full"} times={6} />;
  }

  if (error) {
    return <div>Error fetching data...</div>;
  }
  return <div>{data.length}</div>;
};

export default UserLists;
