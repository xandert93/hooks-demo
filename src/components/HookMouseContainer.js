import React, { useState } from "react";
import HookMouseCoords from "./HookMouseCoords";

const HookMouseContainer = () => {
  const [isDisplayOn, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!isDisplayOn)}>Click Me!</button>
      {isDisplayOn && <HookMouseCoords />}
    </div>
  );
};

export default HookMouseContainer;
