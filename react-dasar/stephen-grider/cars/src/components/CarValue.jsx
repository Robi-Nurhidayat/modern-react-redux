import React from "react";
import { useSelector } from "react-redux";

function CarValue() {
  const { data, searchTerm } = useSelector((state) => {
    return {
      data: state.cars.data,
      searchTerm: state.cars.searchTerm,
    };
  });

  let totalCost = 0;
  data.forEach((car) => {
    totalCost += car.cost;
  });

  console.log(totalCost);
  if (searchTerm) {
    totalCost = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    totalCost = totalCost[0].cost;
  }

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
