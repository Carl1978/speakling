import React, { Component } from "react";
import uuid from "uuid";
import ReactResizeDetector from "react-resize-detector";
//import sizeMe from "react-sizeme";
import WordButton from "./WordButton";

class Sentence extends Component {
  state = {
    lines: 0,
    // phrase: {
    //   id: uuid.v4(),
    //   wordBank: ["la"]
    // }
    wordBankAnswer2: [],
    lineElements: null,
    renderIt: null
  };

  update = word => {
    this.setState({
      word: word
    });
    // this.setState({
    //   test123: "hi"
    // });
  };

  handleOnClick = e => {
    console.log("!!!!!!!! Sentence : handleOnClick...");
  };

  doSomething = word => {
    console.log("sentence : doSomething.......!!!!!!!!");
  };

  renderLines = () => {
    const { lines } = this.props;
    const { width, height } = this.props.size;
    console.log(width + ", " + height);
    let rows = Math.floor(height / 63);
    console.log("rows : " + rows);

    // if (lines != undefined && lines > 0) {
    //   this.state.lines = lines;
    // }

    let arr = new Array(rows).fill(0);
    return arr.map((val, index) => {
      return (
        <div
          key={uuid.v4()}
          className="line-behind"
          style={{ top: 63 * (index + 1) }}
        />
      );
    });
  };

  componentDidUpdate() {
    console.log("componentDidUpdate...");
  }

  onResize = (width, height) => {
    return;
    console.log("onResize...", width, height);

    const { lines } = this.props;
    //const { width, height } = this.props.size;
    console.log(width + ", " + height);
    let rows = Math.floor(height / 63);
    console.log("rows : " + rows);

    // if (lines != undefined && lines > 0) {
    //   this.setState({
    //     lines: lines
    //   });
    //   //this.state.lines = lines;
    // }

    let arr = new Array(rows).fill(0);

    let renderIt = arr.map((val, index) => {
      return (
        <div
          key={uuid.v4()}
          className="line-behind"
          style={{ top: 63 * (index + 1) }}
        />
      );
    });

    this.setState({
      renderIt: renderIt
    });
  };

  render() {
    console.log("render...");
    // const { wordButtons, wordBank } = this.props;
    const { wordBank } = this.props;
    //const { phraseIndex } = this.state;
    //const { wordBank } = this.state.phrase;

    const wordButtons = wordBank.map((word, index) => {
      return <WordButton key={uuid.v4()} word={word} />;
    });
    // const wordButtons = null;

    return (
      <div
        className="sentence"
        // style={
        //   this.state.lines ? { height: 63 * this.state.lines + "px" } : null
        // }
      >
        {wordButtons}
        {/* {this.renderLines()} */}
        {/* {this.state.renderIt} */}
        <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={this.onResize}
        />
      </div>
    );
  }
}

export default Sentence;
//export default sizeMe({ monitorHeight: true })(Sentence);
