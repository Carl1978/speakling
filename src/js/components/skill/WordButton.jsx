import React, { Component } from "react";

class WordButton extends Component {
  state = {
    style: null,
    id: 0
  };

  componentDidMount() {
    const { myWord } = this.props;

    if (myWord !== undefined) {
      console.log("*** myWord : " + myWord);
      const { state } = myWord;
      this.setState({
        style: state === true ? {} : { visibility: "hidden" },
        id: myWord.id
      });
    }
  }

  render() {
    const { word } = this.props;

    // let s = null;
    // if (myWord != undefined) {
    //   console.log("*** myWord : " + myWord);
    //   const { state, id, str } = myWord;
    //   console.log("state : " + state);
    //   s = state === true ? { color: "red" } : { color: "black" };
    // } else s = null;
    return (
      <div
        className="btn"
        // style={this.props.myStyle}
        style={this.state.style}
        onClick={
          this.props.handleOnClick !== undefined
            ? this.props.handleOnClick.bind(this, this.state.id)
            : null
        }
      >
        {word}
      </div>
    );
  }
}

export default WordButton;
