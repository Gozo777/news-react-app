import React from "react";

export default function Comment(props) {
  return (
    <div className="comment">
      <div className="details">
        <h3 className="w3-container">name: {props.name}</h3>
        <p>comment: {props.comment}</p>
      </div>
    </div>
  );
}
