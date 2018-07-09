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
      cardsContent: [], // this will store all the cards to be displayed
      content: "" // content of card currently being added
    };
  }

  changeContent(e) {
    this.setState({
      content: e.target.value
    });
  }

  // A common use for drag and drop between elements,
  // swaps their positions
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

  render() {
    return (
      <div className="App">
        {/* Input to add new cards */}
        <Input
          handleChange={this.changeContent.bind(this)}
          value={this.state.content}
          handleClick={this.addCard.bind(this)}
        />
        {this.state.cardsContent.map((content, index) => (
          // DragDrop component with custom drop handler
          <DragDrop handleDrop={this.swapCards.bind(this)}>
            {/* Card is now draggable (and droppable!) */}
            <Card
              key={index}
              id={index} // unique ID for child, will try to find a better implementation
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
