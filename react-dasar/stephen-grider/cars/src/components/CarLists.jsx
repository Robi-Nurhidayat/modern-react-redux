import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store/slice/carsSlice";

function CarLists() {
  const cars = useSelector((state) => state.cars.data);
  const dispatch = useDispatch();

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };
  const renderedCars = cars.map((car) => {
    return (
      <div className="panel" key={car.id}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  console.log(cars);
  return (
    <div className="car-list">
      {renderedCars}
      <br />
    </div>
  );
}

export default CarLists;
