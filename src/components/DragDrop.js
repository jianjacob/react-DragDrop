import React from "react";

class DragDrop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dragging: false
    };
  }

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
    if (e.target.id) {
      this.props.handleDrop(e.dataTransfer.getData("text"), e.target.id);
      e.dataTransfer.clearData();
    }
  };

  render() {
    return React.cloneElement(this.props.children, {
      ...this.state,
      draggable: "true",
      onDragStart: this.handleDragStart,
      onDragOver: this.handleDragOver,
      onDrop: this.handleDrop,
      onDragEnd: this.handleDragEnd,
      dragging: this.state.dragging
    });
  }
}

export default DragDrop;
