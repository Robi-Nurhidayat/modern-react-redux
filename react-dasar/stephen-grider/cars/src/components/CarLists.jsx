import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store/slice/carsSlice";

function CarLists() {
  // const cars = useSelector(({ cars: { data, searchTerm } }) => {
  //   return data.filter((car) => {
  //     return car.name.toLowerCase().includes(searchTerm.toLowerCase());
  //   });
  // });

  const { data, searchTerm } = useSelector((state) => {
    return {
      data: state.cars.data,
      searchTerm: state.cars.searchTerm,
    };
  });

  let cars = data;
  if (searchTerm) {
    cars = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

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

  return (
    <div className="car-list">
      {renderedCars}
      <br />
    </div>
  );
}

export default CarLists;
