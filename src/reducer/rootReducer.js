import { combineReducers } from "@reduxjs/toolkit";
import dataSlice from "../features/dataSlice";
import uiSlice from "../features/uiSlice";

const rootReducer = combineReducers({
  data: dataSlice,
  ui: uiSlice,
});

export default rootReducer;
