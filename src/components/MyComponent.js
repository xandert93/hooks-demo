import React, { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";

const MyComponent = () => {
  const [age, setAge] = useState(27);
  const [salary, setSalary] = useState(0);

  let increaseAge = useCallback(() => setAge((age) => age + 1), [age]);
  let increaseSalary = useCallback(() => setSalary((salary) => salary + 1), [
    salary,
  ]);

  return (
    <div>
      <Count name="age" count={age} />
      <Button name="age" clickHandler={increaseAge}>
        + age
      </Button>
      <Count name="salary" count={salary} />
      <Button name="salary" clickHandler={increaseSalary}>
        + salary
      </Button>
    </div>
  );
};

export default MyComponent;
