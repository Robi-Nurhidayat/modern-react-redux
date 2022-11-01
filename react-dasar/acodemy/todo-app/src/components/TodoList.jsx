import React, { useEffect, useState } from "react";
import FormAdd from "./FormAdd";
import axios from "axios";
import ListItem from "./ListItem";

function TodoList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    try {
      const respose = async () => {
        const { data } = await axios.get("http://localhost:5000/foods");

        setFoods(data);
      };

      respose();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const renderItem = () => {
    return foods.map((food) => {
      return <ListItem food={food.nama} key={food.id} />;
    });
  };
  return (
    <>
      <FormAdd />
      <ul>{renderItem()}</ul>
    </>
  );
}

export default TodoList;
