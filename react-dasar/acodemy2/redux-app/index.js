const redux = require("redux");

const createStore = redux.createStore;

const BUY_SHOES = "BUY_SHOES";
const BUY_GLOVES = "BUY_GLOVES";

// state

const initialShoes = {
  stockShoes: 50,
};

const initialGloves = {
  stockGloves: 20,
};

const shoesReducer = (state = initialShoes, action) => {
  switch (action.type) {
    case BUY_SHOES:
      return { ...state, stockShoes: state.stockShoes - 2 };
    default:
      return state;
  }
};

const glovesReducer = (state = initialGloves, action) => {
  switch (action.type) {
    case BUY_GLOVES:
      return { ...state, stockGloves: state.stockGloves - 5 };
    default:
      return state;
  }
};

const combinerReducers = redux.combineReducers({
  shoes: shoesReducer,
  gloves: glovesReducer,
});

const store = createStore(combinerReducers);

const unsub = store.subscribe(() => {
  console.log("subcribe dijalankan", store.getState());
});

store.dispatch({ type: BUY_SHOES });
store.dispatch({ type: BUY_GLOVES });
console.log(store.getState());
