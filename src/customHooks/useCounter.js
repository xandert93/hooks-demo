import { useState } from "react";

const useCounter = (defaultState = 0, value = 1) => {
  const [count, setCount] = useState(defaultState);
  let increment = () => setCount((count) => count + value);

  return [count, increment];
};

export default useCounter;
