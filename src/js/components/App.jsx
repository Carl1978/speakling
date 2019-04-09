import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./layout/NavBar";
import DashBoard from "./dashboard/DashBoard";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import Phrases from "./skill/phrases";

class App extends Component {
  state = {
    phrases: [
      { id: 1, question: "The car is red", answer: "Az auto piros" },
      {
        id: 2,
        question: "here is five apples",
        answer: "itt van öt alma"
      },
      { id: 3, question: "What is the time", answer: "mennyi ay idő" },
      { id: 4, question: "What is your name", answer: "mi a neved" }
    ]
  };

  render() {
    console.log(this.state);
    return (
      <BrowserRouter>
        <div className="app">
          <NavBar />
          <br />
          <Switch>
            <Route exact path="/" component={DashBoard} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signout" component={SignIn} />
            <Route path="/skill/fr/phrases/:level" component={Phrases} />
          </Switch>
          <div>{this.state.divName}</div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
