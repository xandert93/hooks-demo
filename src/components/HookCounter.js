import React, { useState, useEffect } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("Title updated by useEffect Hook.");
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <div>
        <label>
          Your name:{" "}
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>
      <button onClick={() => setCount((count) => count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

export default HookCounter;
