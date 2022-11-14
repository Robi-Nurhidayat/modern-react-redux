import { BUY_SHOES } from "./ShoesType";
const initialShoes = {
  stock: 20,
};

const shoesReducer = (state = initialShoes, action) => {
  switch (action.type) {
    case BUY_SHOES:
      return {
        ...state,
        stock: state.stock - 1,
      };
    default:
      return state;
  }
};

export default shoesReducer;
