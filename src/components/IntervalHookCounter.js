import React, { useState, useEffect } from "react";

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  const tick = () => setCount((count) => count + 1);

  useEffect(() => {
    console.log(`useEffect run`);
    let myInterval = setInterval(tick, 1000);
    return () => clearInterval(myInterval);
  }, []);

  return <div>{count}</div>;
};

export default IntervalHookCounter;
