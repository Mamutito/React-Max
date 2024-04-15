import { createStore } from "redux";

function counterReducer(state = { counter: 0 }, action) {
  if (action.type === "increment") {
    return (state = { ...state, counter: state.counter + 1 });
  }

  if (action.type === "decrement") {
    return (state = { ...state, counter: state.counter - 1 });
  }

  if (action.type === "increase") {
    return (state = { ...state, counter: state.counter + action.amount });
  }

  return state;
}
const store = createStore(counterReducer);

export default store;
