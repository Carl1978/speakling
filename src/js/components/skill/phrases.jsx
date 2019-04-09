import React, { Component } from "react";

class Phrases extends Component {
  render() {
    const { level } = this.props.match.params;
    return (
      <div className="phrase-page">
        <div className="phrase-holder">
          <h6>Level - {level}</h6>
          <h1>Write this in French</h1>

          <div className="question">Hello, How are you?</div>
          <div className="sentence" />
          <div className="sentence" />
          <br />
          <div className="btn">bonjour</div>
          <div className="btn">au revoir</div>
          <div className="btn">vas</div>
          <div className="btn">tu</div>
          <div className="btn">comment</div>
          <div className="btn">oui</div>
          <div className="btn">non</div>
          <div className="btn">et</div>
          <div className="btn">la</div>
          {/* Bonjour, comment vas-tu? */}
        </div>
        <br />
        <div className="line" />
        <br />
        <div className="phrase-holder">
          <div className="btn btn-action">Check</div>
        </div>
      </div>
    );
  }
}

export default Phrases;
