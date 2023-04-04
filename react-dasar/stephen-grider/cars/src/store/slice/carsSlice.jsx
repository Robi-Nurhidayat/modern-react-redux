import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },

  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },

    addCar(state, action) {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },

    removeCar(state, action) {
      const update = state.cars.filter((car) => {
        return car.id !== action.payload;
      });

      state.cars = update;
    },
  },
});

export const { addCar, removeCar, changeSearchTerm } = carsSlice.actions;

export const carReducer = carsSlice.reducer;
