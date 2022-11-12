const redux = require("redux");

const createStore = redux.createStore;

const BUY_SHOES = "BUY_SHOES";

// state

const initialShoes = {
  stockShoes: 50,
};

const reducer = (state = initialShoes, action) => {
  switch (action.type) {
    case BUY_SHOES:
      return { ...state, stockShoes: state.stockShoes - 2 };
    default:
      return state;
  }
};

const store = createStore(reducer);

const unsub = store.subscribe(() => {
  console.log("subcribe dijalankan", store.getState());
});

store.dispatch({ type: BUY_SHOES });
store.dispatch({ type: BUY_SHOES });
unsub();
store.dispatch({ type: BUY_SHOES });
store.dispatch({ type: BUY_SHOES });

console.log(store.getState());
