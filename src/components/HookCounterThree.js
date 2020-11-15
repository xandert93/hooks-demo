import React from "react";
import useCounter from "../customHooks/useCounter";
import useDocumentTitle from "../customHooks/useDocumentTitle";

const HookCounterThree = () => {
  let [count, increment] = useCounter(20, 5);
  useDocumentTitle(count);

  return <button onClick={increment}>Count: {count}</button>;
};

export default HookCounterThree;
