import { createStore } from "redux";
import shoesReducer from "./shoes/ShoesReducers";

const store = createStore(shoesReducer);

export default store;
