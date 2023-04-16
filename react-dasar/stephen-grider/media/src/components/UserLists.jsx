import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";

const UserLists = () => {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    setIsLoadingUsers(true);
    dispatch(fetchUsers())
      .unwrap()
      .then(() => {
        console.log("sukses");
      })
      .catch(() => {
        console.log("err");
      });
  }, [dispatch]);

  const handleAdd = async () => {
    await dispatch(addUser());
  };

  if (isLoadingUsers) {
    return <Skeleton className={"h-10 w-full"} times={6} />;
  }

  if (loadingUsersError) {
    return <div>Error fetching data...</div>;
  }

  const renderedUsers = data.map((user) => {
    return (
      <div className="mb-2 border rounded" key={user.id}>
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={handleAdd}>+ Add User</Button>
      </div>
      {renderedUsers}
    </div>
  );
};

export default UserLists;
