import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "../reducer/rootReducer";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhacers = composeAlt(applyMiddleware(thunk));
const store = createStore(rootReducer, composedEnhacers);

export default store;
