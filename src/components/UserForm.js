import React from "react";
import useInput from "../customHooks/useInput";

const UserForm = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitForm = (e) => {
    e.preventDefault();
    alert(`Hello, ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <form onSubmit={submitForm}>
      <label>
        First name: <input {...bindFirstName} />
      </label>
      <br />
      <label>
        Last name: <input {...bindLastName} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
