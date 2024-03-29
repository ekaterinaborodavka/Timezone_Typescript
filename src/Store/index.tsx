import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const logger = (store: any) => (next: any) => (action: any) => {
  console.log("dispatching", action);
  const result = next(action);
  console.log("next state", store.getState());
  return result;
};

const store = createStore(reducer, applyMiddleware(logger, thunk));

export { store };
