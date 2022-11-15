const initialGloves = {
  stock: 100,
};

const gloveReducer = (state = initialGloves, action) => {
  switch (action.type) {
    case "BUY_GLOVES":
      return {
        ...state,
        stock: state.stock - 10,
      };
    default:
      return state;
  }
};

export default gloveReducer;
