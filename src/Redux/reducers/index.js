import { combineReducers } from "redux";
import currencies from "./currencies";
import user from "./user";

const reducers = combineReducers({
  currencies,
  user,
});

export default reducers;
