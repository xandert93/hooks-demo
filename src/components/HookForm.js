import React, { useState } from "react";

const HookForm = () => {
  const [name, setName] = useState({ "first name": "", "last name": "" });
  let { "first name": firstName, "last name": lastName } = name;
  return (
    <>
      <form>
        <label>
          First name:
          <input
            onChange={(e) => setName({ ...name, "first name": e.target.value })}
          />
        </label>
        <label>
          Last name:
          <input
            onChange={(e) => setName({ ...name, "last name": e.target.value })}
          />
        </label>
      </form>
      <h2>
        My name is {firstName} {lastName}
      </h2>
    </>
  );
};

export default HookForm;
