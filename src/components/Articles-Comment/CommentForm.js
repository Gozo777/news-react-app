import React, { useState } from "react";

export default function CommentForm(props) {
  console.log("PROPS IN PLAYER FORM:", props);

  const [comment, setComment] = useState(localStorage.getItem("comment") || "");
  const [name, setName] = useState(localStorage.getItem("name") || "");

  function handleNameChange(event) {
    // console.log(event.target.value);
    localStorage.setItem("name", event.target.value);
    setName(event.target.value);
  }

  function handleCommentChange(event) {
    // console.log(event.target.value);
    localStorage.setItem("comment", event.target.value);
    setComment(event.target.value);
  }

  function handleAddComment(event) {
    event.preventDefault(); // do not resfresh, this is 2020
    console.log("add comment", name, comment);
    // CALL CALLBACK, PASS IN NAME AS AN ARGUMENT
    props.addCommentToState(name, comment);
    localStorage.removeItem(("comment"));
    setComment("");
    localStorage.removeItem(("name"));
    setName("");
  }

  return (
    <div>
      <form>
        <label>Name:</label>
        <input value={name} onChange={handleNameChange} />
        {/* <input value={name} onChange={(e) => setName(e.target.value)} /> */}
        <label>Comment:</label>
        <input value={comment} onChange={handleCommentChange} />

        <button onClick={handleAddComment}>Add Comment</button>
      </form>
    </div>
  );
}