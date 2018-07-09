import React from "react";

// *******************
// DragDrop component
// *******************
// Simple component that enables dragging and dropping
// for it's child component.
// -- MIT license
class DragDrop extends React.Component {
  constructor(props) {
    super(props);

    // use the 'dragging' property to style child component
    this.state = {
      dragging: false
    };
  }

  // HTML5 drag and drop events (short primer):
  // ------------------------
  // Requires at least the following events:
  // * onDragStart() =>
  // - use event.dataTransfer.setData() over here to store data about the
  // - element being dragged
  // * onDragOver() =>
  // - prevent it's default behaviour in order to enable dropping
  // - onto target element
  // * onDrop() =>
  // - perform your desired 'drop' operation here, usually involves
  // - event.dataTransfer.getData() to retrieve the dragged element
  // -------------------------

  handleDragStart = e => {
    e.dataTransfer.setData("text", e.target.id);
    this.setState({
      dragging: true
    });
  };

  handleDragEnd = () => {
    this.setState({
      dragging: false
    });
  };

  handleDragOver = e => {
    e.preventDefault();
  };

  handleDrop = e => {
    if (e.target.id && this.props.handleDrop) {
      this.props.handleDrop(e.dataTransfer.getData("text"), e.target.id);
      e.dataTransfer.clearData();
    }
  };

  render() {
    return React.cloneElement(this.props.children, {
      ...this.state,
      draggable: "true", // enables dragging of any element in DOM
      onDragStart: this.handleDragStart,
      onDragOver: this.handleDragOver,
      onDrop: this.handleDrop,
      onDragEnd: this.handleDragEnd,
      dragging: this.state.dragging
    });
  }
}

export default DragDrop;
