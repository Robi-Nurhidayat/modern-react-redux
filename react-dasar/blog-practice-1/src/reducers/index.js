import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducers from "./userRecuders";

export default combineReducers({
  posts: postReducer,
  user: userReducers,
});
