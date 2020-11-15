import React, { useContext } from "react";
import { NameContext } from "./context/NameContext";
import { AgeContext } from "./context/AgeContext";

const ComponentF = () => {
  let name = useContext(NameContext);
  let age = useContext(AgeContext);

  return (
    <h2>
      My name is {name} and I am {age}
    </h2>
  );
};

export default ComponentF;
