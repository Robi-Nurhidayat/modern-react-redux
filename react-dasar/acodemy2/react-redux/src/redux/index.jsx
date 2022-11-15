import { combineReducers } from "redux";
import gloveReducer from "./gloves/gloveReducer";
import shoesReducer from "./shoes/ShoesReducers";

export default combineReducers({
  shoes: shoesReducer,
  gloves: gloveReducer,
});
