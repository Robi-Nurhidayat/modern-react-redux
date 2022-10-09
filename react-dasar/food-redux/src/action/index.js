export const selectFood = (food) => {
  return {
    type: "SELECT_FOOD",
    payload: food,
  };
};
