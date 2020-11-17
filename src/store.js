import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { mealsReducer } from "./reducers/mealReducers";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    meals: mealsReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
