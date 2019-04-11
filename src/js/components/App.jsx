import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./layout/NavBar";
import DashBoard from "./dashboard/DashBoard";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import Phrases from "./skill/Phrases";

class App extends Component {
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
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
