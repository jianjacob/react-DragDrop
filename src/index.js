import React from "react";
import ReactDOM from "react-dom";

import Card from "./components/Card";
import Input from "./components/Input";
import DragDrop from "./components/DragDrop";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardsContent: [],
      content: "",
      dragindex: null,
      dropindex: null
    };
  }

  setDragIndex(index) {
    this.setState({
      dragindex: index
    });
  }

  setDropIndex(index) {
    this.setState({
      dropindex: index
    });
  }

  changeContent(e) {
    this.setState({
      content: e.target.value
    });
  }

  swapCards(dragIndex, dropIndex) {
    let updatedCards = this.state.cardsContent;
    const dragValue = this.state.cardsContent[dragIndex];
    const dropValue = this.state.cardsContent[dropIndex];
    updatedCards[dropIndex] = dragValue;
    updatedCards[dragIndex] = dropValue;
    this.setState({
      cardsContent: updatedCards
    });
  }

  addCard() {
    if (this.state.content) {
      this.setState({
        cardsContent: this.state.cardsContent.concat(this.state.content)
      });
    }
    this.setState({ content: "" });
  }

  deleteCard(index) {
    this.setState({
      cardsContent: this.state.cardsContent.filter((card, i) => i !== index)
    });
  }

  render() {
    return (
      <div className="App">
        <Input
          handleChange={this.changeContent.bind(this)}
          value={this.state.content}
          handleClick={this.addCard.bind(this)}
        />
        {this.state.cardsContent.map((content, index) => (
          <DragDrop handleDrop={this.swapCards.bind(this)}>
            <Card
              key={index}
              id={index}
              content={content}
              cards={this.state.cardsContent}
            />
          </DragDrop>
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
