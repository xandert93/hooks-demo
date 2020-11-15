import React from "react";

const HookList = () => {
  let initialState = [];
  const [list, setList] = React.useState(initialState);

  const addItem = () =>
    setList([
      ...list,
      {
        key: list.length,
        value: Math.floor(Math.random() * 10),
      },
    ]);

  let listItems = list.map((obj) => (
    <li style={{ listStyleType: "none" }} key={obj.key}>
      {obj.value}
    </li>
  ));

  return (
    <>
      <button onClick={addItem}>Add no. to list</button>
      <ul>{listItems}</ul>
    </>
  );
};

export default HookList;
