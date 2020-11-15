import React, { useReducer, useEffect } from "react";
import { get } from "axios";

let defaultState = {
  isLoading: true,
  post: {},
  errorMsg: "",
};

let reducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_SUCCESS":
      return { isLoading: false, post: payload };
    case "FETCH_FAIL":
      return { isLoading: false, errorMsg: "There was an error." };
    default:
      return state;
  }
};

const HookFetch2 = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  let { isLoading, post, errorMsg } = state;
  useEffect(() => {
    get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) =>
        dispatch({ type: "FETCH_SUCCESS", payload: response.data })
      )
      .catch((err) => dispatch({ type: "FETCH_FAIL" }));
  }, []);

  return (
    <div>
      <p>{isLoading ? "Loading..." : errorMsg ? errorMsg : post.title}</p>
    </div>
  );
};

export default HookFetch2;
