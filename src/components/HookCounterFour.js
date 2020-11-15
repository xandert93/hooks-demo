import React from "react";
import useCounter from "../customHooks/useCounter";
import useDocumentTitle from "../customHooks/useDocumentTitle";

const HookCounterFour = () => {
  let [count, increment] = useCounter();
  useDocumentTitle(count);

  return <button onClick={increment}>Count: {count}</button>;
};

export default HookCounterFour;
