import React from "react";

function Card(props) {
  return (
    <div
      class="card"
      {...props}
      style={
        // using 'dragging' property to change styles dynamically
        !props.dragging
          ? {}
          : { border: "2px dashed red", backgroundColor: "yellow" }
      }
    >
      {// using 'dragging' property to change display behavior
      !props.dragging ? <p>{props.content}</p> : <span />}
    </div>
  );
}

export default Card;
