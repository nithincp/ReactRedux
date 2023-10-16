import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";

const reducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

const store = configureStore({ reducer });

export default store;
