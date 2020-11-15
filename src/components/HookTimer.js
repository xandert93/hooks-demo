import React, { useState, useRef, useEffect } from "react";

const HookTimer = () => {
  const [time, setTime] = useState(0.0);

  let intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => setTime((time) => time + 1), 1000);
    return () => clearInterval(intervalRef.current);
  }, []);
  return (
    <div>
      <p>{time}</p>
      <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
    </div>
  );
};

export default HookTimer;
