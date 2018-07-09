import React from "react";

function Card(props) {
  return (
    <div
      class="card"
      {...props}
      style={
        !props.dragging
          ? {}
          : { border: "2px dashed red", backgroundColor: "yellow" }
      }
    >
      {!props.dragging ? <p>{props.content}</p> : <span />}
    </div>
  );
}

export default Card;
