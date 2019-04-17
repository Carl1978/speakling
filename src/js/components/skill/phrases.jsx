import React, { Component } from "react";
import uuid from "uuid";
import WordButton from "./WordButton";
import Sentence from "./Sentence";

// https://medium.com/trabe/measuring-elements-in-react-6bf343b65347

class Word {
  str = "";
  state = false;

  constructor(str, id) {
    console.log("Word constructor...");

    this.str = str;
    this.id = id;
    this.state = true;
  }

  toString() {
    return `Word :: value : ${this.str}, state : ${this.state}, id : ${
      this.id
    }`;
  }
}

class Phrases extends Component {
  /* Bonjour, comment vas-tu? */
  wordLst = [
    "bonjour",
    "au-revoir",
    "vas",
    "tu",
    "comment",
    "oui",
    "non",
    "et",
    "la"
  ];

  state = {
    myWords: [],
    voiceOn: false,
    phraseIndex: 0,
    phrases: [
      {
        id: uuid.v4(),
        message: "Hello, How are you?",
        response: "Bonjour comment vas tu",
        wordBank: [
          "bonjour",
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

  // ------------------------------------------------------------------
  // Speech Synthesis
  // Init SpeechSynth API
  synth = window.speechSynthesis;

  // Init voices array
  voices = [];

  rate = 1;
  pitch = 1;

  getVoices = () => {
    this.voices = this.synth.getVoices();
    console.log(this.voices);
  };

  // Speak
  speak = () => {
    // Check if speaking
    if (this.synth.speaking) {
      console.log("Already speaking...");
      return;
    }

    let textInputValue = "Hello, How are you?";
    if (textInputValue !== "") {
      // Get speak text
      const speakText = new SpeechSynthesisUtterance(textInputValue);
      // Speak end
      speakText.onend = e => {
        console.log("Done speaking...");
      };

      // Speak error
      speakText.onerror = e => {
        console.error("Something went wrong");
      };

      // // Selected voice
      console.log("got here!");
      this.voices.forEach(voice => {
        console.log("voice : " + voice);
        //if (voice.lang === "fr-FR") {
        if (voice.lang === "en-US") {
          console.log("Got here!");
          speakText.voice = voice;
        }
      });

      // Set pitch and rate
      speakText.rate = this.rate;
      speakText.pitch = this.pitch;

      // Speak
      this.synth.speak(speakText);
    }
  };

  // ------------------------------------------------------------------
  // Speech Recognition

  recognition = null;
  //voiceOn = true;

  initSpeechRecognition = () => {
    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    this.recognition = new window.SpeechRecognition();
    this.recognition.interimResults = true;
    this.recognition.lang = "en-US"; //"fr-Fr"; //"en-US"; //"hu-HU"; //"en-US";
    let { lang } = this.recognition;
    console.log("initSpeechRecognition : lang : " + lang);
    //recognition.start();
    // recognition.abort();
    // recognition.stop();

    this.recognition.addEventListener("result", e => {
      console.log(e.results);
      const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("");

      console.log(transcript);

      //p.textContent = transcript;
      // this.setState({
      //   spoken: transcript
      // });

      //if (this.recognition.lang === "fr-FR") {
      const { phraseIndex, wordBankAnswer } = this.state;
      const { wordBank } = this.state.phrases[phraseIndex];
      wordBank.forEach(word => {
        if (transcript.toLowerCase().includes(word)) {
          if (!wordBankAnswer.includes(word)) {
            this.setState({
              wordBankAnswer: [...wordBankAnswer, word]
            });
          }
        }
      });
      //}

      // // check if trancscript includes something!
      // if (recognition.lang === "hu-HU") {
      //   let i = 0;
      //   const newFruit = this.state.fruitLstHU.map(fruitHu => {
      //     const fruit = this.state.fruitLst[i];
      //     if (transcript.includes(fruitHu.name)) {
      //       fruit.display = "hide";
      //     }
      //     i++;
      //     return fruit;
      //   });
      //   this.setState({
      //     fruitLst: newFruit
      //   });

      //   // special cases!
      //   if (transcript.includes("megint")) {
      //     const initFruit = this.state.fruitLst.map(fruit => {
      //       fruit.display = "show";
      //       return fruit;
      //     });
      //     this.setState({
      //       fruitLst: initFruit
      //     });
      //   }
      // } else {
      //   // defualt English
      //   if (transcript.includes("unicorns")) {
      //     console.log("Well Done!!! The correct answer is Unicorns!!!");
      //   }
      // }

      //   if (transcript.includes("carl is here")) {
      //     console.log("Well Done!!! You guessed the password!");
      //   }

      //   console.log(transcript);
    });

    //this.recognition.addEventListener("end", this.recognition.start);
    this.recognition.addEventListener("end", () => {
      if (this.state.voiceOn) this.recognition.start();
    });

    if (this.state.voiceOn) this.recognition.start();
  };

  componentDidMount() {
    console.log("componentDidMount...");

    this.getVoices(); // for FireFox browser we think this is needed?
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = this.getVoices;
    }

    this.initSpeechRecognition();

    // let arr = new Array()
    // this.setState({
    //   wordButtonStateLst
    // });

    let myWords = [];
    this.wordLst.forEach((str, index) => {
      let word = new Word(str, index);
      myWords.push(word);
    });

    this.setState({
      myWords: myWords
    });

    console.log(this.state.myWords);
    console.log(myWords[0].toString());
  }

  handleCheck = e => {
    this.speak();
  };

  handleSpeak = e => {
    let voiceOn = this.state.voiceOn;
    voiceOn = voiceOn ? false : true;

    this.setState({
      voiceOn
    });

    if (voiceOn) {
      console.log("voiceOn Start");
      //e.target.textContent = "Click Mode";
      this.recognition.start();
    } else {
      console.log("voiceOn Stop");
      //e.target.textContent = "Speech Mode";
      this.recognition.abort();
      this.recognition.stop();
    }
  };

  handleOnClick = (id, e) => {
    console.log("handleOnClick.......! : id : " + id);
    console.log("e.target.textContent : " + e.target.textContent);

    let word = e.target.textContent;
    console.log(e.target.style);

    let myWords = this.state.myWords.map(word => {
      if (word.id === id) {
        word.state = false;
      }
      return word;
    });

    console.log("TEST: word : ", word);
    word = new Word(word, id);

    this.setState({
      wordBankAnswer: [...this.state.wordBankAnswer, word],
      myWords: myWords
    });
  };

  render() {
    console.log(this.state.myWords);
    const { phraseIndex, wordBankAnswer } = this.state;
    const { message, response, wordBank } = this.state.phrases[phraseIndex];
    const { level } = this.props.match.params;
    const { wordButtonStateLst } = this.state;
    const { myWords } = this.state;

    const wordButtons = wordBank.map((word, index) => {
      console.log("myWords : " + myWords);
      return (
        <WordButton
          key={uuid.v4()}
          word={word}
          myWord={myWords[index]}
          handleOnClick={this.handleOnClick}
        />
      );
    });

    return (
      <div className="phrase-page">
        <div className="phrase-holder">
          <h6>Level - {level}</h6>
          <h1>Write this in French:</h1>
          <div className="question">{message}</div>
          <Sentence key={uuid.v4()} wordBank={wordBankAnswer} />
        </div>
        <br />
        <div className="phrase-holder phrase-holder-auto">{wordButtons}</div>
        <br />
        <div className="line" />

        <div className="control-holder">
          <div className="btn btn-action" onClick={this.handleCheck.bind(this)}>
            Speak
            {/* Check */}
          </div>
          <div
            className="btn btn-action"
            style={
              this.state.voiceOn ? buttonSpeakStyle : buttonSpeakGreyedStyle
            }
            onClick={this.handleSpeak.bind(this)}
          >
            Speech Mode
          </div>
        </div>
      </div>
    );
  }
}

const buttonSpeakStyle = {
  color: "black",
  backgroundColor: "var(--greenYellowDark)",
  borderBottom: "4px solid var(--greenYellowDark2)",
  borderRight: "2px solid var(--greenYellowDark2)",
  borderTop: "1px solid var(--greenYellowDark2)",
  borderLeft: "1px solid var(--greenYellowDark2)"
};

const buttonSpeakGreyedStyle = {
  color: "#777",
  backgroundColor: "#aaa",
  borderBottom: "4px solid #999",
  borderRight: "2px solid #999",
  borderTop: "1px solid #999",
  borderLeft: "1px solid #999"
};

export default Phrases;
