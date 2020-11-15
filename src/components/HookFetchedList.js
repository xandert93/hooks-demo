import React, { useState, useEffect } from "react";
import { get } from "axios";

const HookFetchedList = () => {
  const [post, setPost] = useState([]);
  const [id, setId] = useState("");
  const [idFromButton, setIdFromButton] = useState("");

  useEffect(() => {
    if (idFromButton !== "") {
      get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then((response) => setPost(response.data))
        .catch(() => console.log("There was an error while fetching."));
    }
  }, [idFromButton]);

  return (
    <div>
      <label>
        Enter number:
        <input value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={() => setIdFromButton(id)}>Fetch Post Title</button>
      </label>
      {idFromButton !== "" && <li key={post.id}>{post.title}</li>}
    </div>
  );
};

export default HookFetchedList;
