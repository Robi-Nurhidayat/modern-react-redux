import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./userReducer";

const User = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div>
      {user.loading && <p>Loading</p>}
      {user.user.length &&
        user.user.map((item) => {
          return <p>{item.name}</p>;
        })}
    </div>
  );
};

export default User;
