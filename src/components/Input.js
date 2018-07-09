import React from "react";

class Input extends React.Component {
  handleChange(e) {
    this.props.handleChange(e);
  }

  handleClick() {
    this.props.handleClick();
  }

  handleEnter(e) {
    if (e.key === "Enter") this.handleClick();
  }

  render() {
    return (
      <div class="input">
        <input
          type="text"
          value={this.props.value}
          onChange={this.handleChange.bind(this)}
          onKeyPress={this.handleEnter.bind(this)}
        />
        <button id="add-btn" onClick={this.handleClick.bind(this)}>
          +
        </button>
      </div>
    );
  }
}

export default Input;
