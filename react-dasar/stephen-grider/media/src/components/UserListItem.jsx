import React from "react";
import { GoTrashcan } from "react-icons/go";
import { removeUser } from "../store";
import { useThunk } from "../hook/use-thunk";
import Button from "./Button";

function UserListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };
  return (
    <div key={user.id} className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          <Button className="mr-3" loading={isLoading} onClick={handleClick}>
            <GoTrashcan />
          </Button>
          {error && console.log(error)}
          {user.name}
        </div>
      </div>
    </div>
  );
}

export default UserListItem;
