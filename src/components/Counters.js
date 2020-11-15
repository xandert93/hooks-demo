import React, { useReducer } from "react";

let defaultState = 0;

let reducer = (state, { type, value }) => {
  switch (type) {
    case "increment":
      return state + value;
    case "decrease":
      return state - value;
    case "reset":
      return defaultState;
    default:
      return state;
  }
};

const Counters = () => {
  const [countOne, dispatchOne] = useReducer(reducer, defaultState);
  const [countTwo, dispatchTwo] = useReducer(reducer, defaultState);
  return (
    <>
      <p>{countOne}</p>
      <div>
        <span>Counter 1 controls: </span>
        <button onClick={() => dispatchOne({ type: "increment", value: 1 })}>
          +
        </button>
        <button onClick={() => dispatchOne({ type: "decrease", value: 1 })}>
          -
        </button>
        <button onClick={() => dispatchOne({ type: "reset" })}>reset</button>
      </div>
      <p>{countTwo}</p>
      <div>
        <span>Counter 2 controls: </span>
        <button onClick={() => dispatchTwo({ type: "increment", value: 2 })}>
          + by 2
        </button>
        <button onClick={() => dispatchTwo({ type: "decrease", value: 2 })}>
          - by 2
        </button>
        <button onClick={() => dispatchTwo({ type: "reset" })}>reset</button>
      </div>
    </>
  );
};

export default Counters;
