import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) {
        return;
      }
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({ type: "account/deposit", payload: 1000 });
store.dispatch({ type: "account/withdraw", payload: 600 });
store.dispatch({
  type: "account/requestLoan",
  payload: { amount: 20_000, purpose: "buy a car." },
});
store.dispatch({ type: "account/payLoan" });

console.log(store.getState());


/***
 * Steps:
 * 1) Create the initial state, and create a reducer function
 * 2) install redux
 * 3) import createStore @deprecated
 * 4) initialize a store
 * 5) 
 */