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
        return <ListItem food={food.nama} key={food.id} />;
      })
      .reverse();
  };

  const addFood = (nama) => {
    axios.post("http://localhost:5000/foods", nama);
  };
  return (
    <>
      <FormAdd addFood={addFood} />
      <ul>{renderItem()}</ul>
    </>
  );
}

export default TodoList;
