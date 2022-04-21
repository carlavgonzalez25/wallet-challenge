import { createStore, applyMiddleware } from "redux";
import reducers from "./Redux/reducers";
import thunk from "redux-thunk";

export function configureStore() {
  const store = createStore(reducers, applyMiddleware(thunk));
  return { store };
}
