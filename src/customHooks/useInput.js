import { useState } from "react";

const useInput = (defaultState) => {
  const [name, setName] = useState(defaultState);

  const boundAttributes = {
    value: name,
    onChange: (e) => setName(e.target.value),
  };

  const resetField = () => setName(defaultState);

  return [name, boundAttributes, resetField];
};

export default useInput;
