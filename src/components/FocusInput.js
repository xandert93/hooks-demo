import React, { useRef, useEffect } from "react";

const FocusInput = () => {
  let inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} placeholder="type here..." />;
};

export default FocusInput;
