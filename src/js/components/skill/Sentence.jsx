import React, { Component } from "react";
import uuid from "uuid";
import WordButton from "./WordButton";

class Sentence extends Component {
  renderLines = () => {
    // const { lines } = this.props;
    // const { width, height } = this.props.size;
    // console.log(width + ", " + height);
    // let rows = Math.floor(height / 63);
    // console.log("rows : " + rows);
    // if (lines != undefined && lines > 0) {
    //   this.state.lines = lines;
    // }
    // let arr = new Array(rows).fill(0);
    // return arr.map((val, index) => {
    //   return (
    //     <div
    //       key={uuid.v4()}
    //       className="line-behind"
    //       style={{ top: 63 * (index + 1) }}
    //     />
    //   );
    // });
  };

  handleOnClick = (id, e) => {
    console.log("handleOnClick.......! : id : " + id);
    console.log("e.target.textContent : " + e.target.textContent);

    console.log("handleOnClick :: Sentence : word : ", this.props.word);
  };

  render() {
    const { wordBank } = this.props;
    const wordButtons = wordBank.map((word, index) => {
      console.log("Sentence : word : ", word.toString());
      return (
        <WordButton
          key={uuid.v4()}
          word={word.str}
          handleOnClick={this.handleOnClick}
        />
      );
    });

    return <div className="sentence">{wordButtons}</div>;
  }
}

export default Sentence;
