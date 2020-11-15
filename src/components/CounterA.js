import React, { useState, useMemo } from "react";

const CounterA = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  let isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div>
      <button onClick={() => setCount1(count1 + 1)}>
        Counter One: {count1}
      </button>
      <p>Count above is {isEven ? "even" : "false"}</p>
      <button onClick={() => setCount2(count2 + 1)}>
        Counter Two: {count2}
      </button>
    </div>
  );
};

export default CounterA;
