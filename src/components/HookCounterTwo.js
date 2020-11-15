import React, { useState } from "react";

function HookCounterTwo() {
  const [count, setCount] = useState(0);

  function incrementBy5() {
    for (let j = 0; j < 5; j++) {
      setCount((count) => count + 1);
    }
  }

  return (
    <div>
      Count: {count}
      <button onClick={incrementBy5}> +5</button>
    </div>
  );
}

export default HookCounterTwo;
