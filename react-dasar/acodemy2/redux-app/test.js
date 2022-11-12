const redux = require("redux");

const BUY_SHOES = "BUY_SHOES";

const ADD_STOCK = "ADD_STOCK";

const initialShoes = {
  stok: 20,
};

const reducer = (state = initialShoes, action) => {
  switch (action.type) {
    case BUY_SHOES:
      return { ...state, stok: state.stok - 2 };
    case ADD_STOCK:
      return { ...state, stok: state.stok + 2 };
    default:
      return state;
  }
};

const store = redux.createStore(reducer);

store.dispatch({ type: BUY_SHOES });
store.dispatch({ type: BUY_SHOES });
store.dispatch({ type: BUY_SHOES });
store.dispatch({ type: ADD_STOCK });

console.log(store.getState());
