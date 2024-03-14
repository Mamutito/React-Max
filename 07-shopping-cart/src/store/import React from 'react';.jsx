import React from "react";
export function counterReducer(state, action) {
  let newCount = 0;
  switch (action.type) {
    case "INCREMENT":
      newCount = state.count + 1;
      return { count: newCount };
    case "DECREMENT":
      newCount = state.count - 1;
      return { count: newCount };
    case "RESET":
      return { count: newCount };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = React.useReducer(counterReducer, { count: 0 });
  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </p>
      <p id="counter">{state.count}</p>
    </div>
  );
}

export default App;
