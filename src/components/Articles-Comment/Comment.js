import React from "react";

export default function Comment(props) {
  return (
    <div className="comment">
      <div className="details">
        <p className="w3-container">name : {props.name}</p>
        <p>comment : {props.comment}</p>
      </div>
    </div>
  );
}
