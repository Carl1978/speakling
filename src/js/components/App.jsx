import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./layout/NavBar";
import User from "./User";

class App extends Component {
    state = {
        loggedIn: false
    };

    // handleLogIn = () => {
    //     this.setState({ loggedIn: false });
    // };

    render() {
        //console.log(this.state);
        return (
            <Router>
                <div className="app">
                    {/* <NavBar handleLogIn={this.handleLogIn.bind(this)} /> */}
                    <Route
                        exact
                        path="/"
                        render={() => {
                            return <h1>Home</h1>;
                        }}
                    />
                    <Route
                        exact
                        path="/help"
                        render={() => {
                            return <h1>Help</h1>;
                        }}
                    />

                    <Route path="/user/:username" component={User} />
                </div>
            </Router>
        );
    }
}

export default App;
