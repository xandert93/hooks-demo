import React, { memo } from "react";

const Count = ({ count, name }) => {
  console.log(`${name} count rendered`);
  return <div>{count}</div>;
};

export default memo(Count);
