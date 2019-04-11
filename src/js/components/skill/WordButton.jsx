import React, { Component } from "react";

class WordButton extends Component {
  render() {
    const { word } = this.props;
    return (
      <div className="btn" onClick={this.props.handleOnClick}>
        {word}
      </div>
    );
  }
}

export default WordButton;
