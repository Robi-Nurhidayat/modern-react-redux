import { combineReducers, createStore } from "redux";
import gloveReducer from "./gloves/gloveReducer";
import shoesReducer from "./shoes/ShoesReducers";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  shoes: shoesReducer,
  gloves: gloveReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
