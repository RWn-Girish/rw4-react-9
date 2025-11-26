import { applyMiddleware, createStore } from "redux";
import { productReducer } from "./services/reducers/productReducer";
import { thunk } from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  productReducer,
  composeEnhancers(applyMiddleware(thunk))
);
