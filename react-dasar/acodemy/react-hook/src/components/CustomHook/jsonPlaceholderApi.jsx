import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function jsonPlaceholderApi(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(data);
    };

    getUsers();
  }, []);
  return [data];
}

export default jsonPlaceholderApi;
