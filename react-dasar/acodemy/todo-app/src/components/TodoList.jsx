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
    return foods
      .map((food) => {
        return (
          <ListItem
            deleteFood={deleteFood}
            food={food.nama}
            key={food.id}
            id={food.id}
          />
        );
      })
      .reverse();
  };

  // Add Todo
  const addFood = (nama) => {
    axios.post("http://localhost:5000/foods", nama);
  };

  // Delete Todo

  const deleteFood = (id) => {
    axios.delete(`http://localhost:5000/foods/${id}`);
  };
  return (
    <>
      <FormAdd addFood={addFood} />
      <ul>{renderItem()}</ul>
    </>
  );
}

export default TodoList;
