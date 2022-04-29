import { colorReducer } from "./color/reducer";
import { authReducer } from "./auth/reducer";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";

const rootreducer = combineReducers({
  color: colorReducer,
  auth: authReducer,
});
const customMiddleware = (store) => (next) => (action) => {
  console.log();
  return typeof action === "function" ? action(store.dispatch) : next(action);
};

const store = createStore(rootreducer, applyMiddleware(customMiddleware));


export default store;
