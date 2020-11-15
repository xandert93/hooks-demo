import React, { memo } from "react";

const Button = ({ clickHandler, children }) => {
  console.log(`${children} button rendered`);
  return <button onClick={clickHandler}>{children}</button>;
};

export default memo(Button);
