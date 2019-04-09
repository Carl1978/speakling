import * as React from "react";
import { Component } from "react";
import * as ReactDOM from "react-dom";

import App from "./components/App";

import { add } from "./hello";

import "../scss/main.scss";

let mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);

// console.log(add(1, 2));
