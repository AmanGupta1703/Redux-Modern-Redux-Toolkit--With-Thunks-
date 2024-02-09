import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// createstore accepts a single argument i.e root reducer,
// to combine all the reducer and
// and create a root reducer
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

/***
 * Steps:
 * 1) Create the initial state, and create a reducer function
 * 2) install redux
 * 3) import createStore @deprecated
 * 4) initialize a store
 * 5) create action creator functions.
 * 6) same steps for Customer state
 * 7) Arrange them in thier respective files
 */
