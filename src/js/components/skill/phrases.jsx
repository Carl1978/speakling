import React, { Component } from "react";
import uuid from "uuid";
import WordButton from "./WordButton";
import Sentence from "./Sentence";

// https://medium.com/trabe/measuring-elements-in-react-6bf343b65347

class Phrases extends Component {
  /* Bonjour, comment vas-tu? */
  state = {
    phraseIndex: 0,
    phrases: [
      {
        id: uuid.v4(),
        message: "Hello, How are you?",
        response: "Bonjour comment vas tu",
        wordBank: [
          "bonjour",
          // "bonjour",
          // "bonjour",
          // "bonjour",
          // "bonjour",
          // "bonjour",
          // "bonjour",
          // "bonjour",
          // "bonjour",
          // "bonjour",
          // "bonjour",
          // "bonjour",
          "au-revoir",
          "vas",
          "tu",
          "comment",
          "oui",
          "non",
          "et",
          "la"
        ]
      },
      {
        id: uuid.v4(),
        message: "The pen is red",
        response: "Le stylo est rouge",
        wordBank: [
          "tu",
          "stylo",
          "les",
          "est",
          "comment",
          "Le",
          "rouge",
          "et",
          "la"
        ]
      }
    ],
    wordBankAnswer: []
  };

  handleOnClick = e => {
    let word = e.target.textContent;
    this.setState({
      wordBankAnswer: [...this.state.wordBankAnswer, word]
    });
  };

  doSomething = word => {
    return word;
  };

  render() {
    const { phraseIndex, wordBankAnswer } = this.state;
    const { message, response, wordBank } = this.state.phrases[phraseIndex];
    const { level } = this.props.match.params;

    const wordButtons = wordBank.map((word, index) => {
      return (
        <WordButton
          key={uuid.v4()}
          word={word}
          handleOnClick={this.handleOnClick.bind(this)}
        />
      );
    });

    // const wordButtonsAnswer = wordBankAnswer.map((word, index) => {
    //   return (
    //     <WordButton
    //       key={uuid.v4()}
    //       word={word}
    //       handleOnClick={this.handleOnClick}
    //     />
    //   );
    // });

    return (
      <div className="phrase-page">
        <div className="phrase-holder">
          <h6>Level - {level}</h6>
          <h1>Write this in French:</h1>
          <div className="question">{message}</div>
          {/* <Sentence key={uuid.v4()} wordButtons={wordButtons} /> */}
          <Sentence
            key={uuid.v4()}
            lines={2}
            wordBank={wordBankAnswer}
            handleOnClick={this.handleOnClick}
            doSomething={this.doSomething}
          />
        </div>
        <br />
        <br />
        <div className="phrase-holder">{wordButtons}</div>
        <br />
        <div className="line" />

        <div className="control-holder">
          <div className="btn btn-action">Check</div>
        </div>
      </div>
    );
  }
}

export default Phrases;
