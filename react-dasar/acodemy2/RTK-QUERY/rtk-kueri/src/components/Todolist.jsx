import React from "react";
import FormAdd from "./FormAdd";
import { useGetTodosQuery } from "../app/features/apiSlice";
import Todoitem from "./Todoitem";

const Todolist = () => {
  const { isSuccess, isLoading, data } = useGetTodosQuery();
  // const renderTodoItem = () => {
  //   data.map((todo) => {
  //     return <Todolist key={todo.id} todo={todo} />;
  //   });
  // };
  return (
    <div>
      <FormAdd />
      {isLoading && <p>Loading...</p>}
      <ul>
        {isSuccess &&
          data.map((todo) => {
            return <Todoitem key={todo.id} todo={todo} />;
          })}
      </ul>
    </div>
  );
};

export default Todolist;
