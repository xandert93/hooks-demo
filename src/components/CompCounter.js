import React, { useContext } from "react";
import { CounterContext } from "../App";

const CompCounter = ({ name }) => {
  let { count, dispatch } = useContext(CounterContext);

  return (
    <div>
      <span>Counter {name} controls: </span>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <span> value {count} </span>
    </div>
  );
};

export default CompCounter;
