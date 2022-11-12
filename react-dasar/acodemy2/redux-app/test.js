const redux = require("redux");

const BUY_FOOD = "BUY_FOOD";
const BUY_DRINK = "BUY_DRINK";
const ADD_STOCK = "ADD_STOCK";

const STOK_PANTRY = "STOK_PANTRY";

// store

const restaurant = {
  food: 50,
  drink: 100,
  stock: 1000,
};

const pantry = {
  stok: 100,
};

const restaurantReducers = (state = restaurant, action) => {
  switch (action.type) {
    case BUY_DRINK:
      return { ...state, drink: state.drink - 20 };
    case BUY_FOOD:
      return { ...state, food: state.food - 10 };
    case ADD_STOCK:
      return {
        ...state,
        stock: state.stock + 1000,
        food: state.food + 5,
        drink: state.drink + 5,
      };
    default:
      return state;
  }
};

const pantryRedcucers = (state = pantry, action) => {
  switch (action.type) {
    case STOK_PANTRY:
      return {
        ...state,
        stok: state.stok + 100,
      };
    default:
      return state;
  }
};

const combineReducers = redux.combineReducers({
  restaurant: restaurantReducers,
  pantry: pantryRedcucers,
});

const store = redux.createStore(combineReducers);

store.dispatch({ type: BUY_DRINK });
store.dispatch({ type: BUY_DRINK });
store.dispatch({ type: BUY_FOOD });
store.dispatch({ type: ADD_STOCK });
store.dispatch({ type: STOK_PANTRY });

console.log(store.getState());
