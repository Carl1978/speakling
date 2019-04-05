// https://basarat.gitbooks.io/typescript/docs/testing/jest.html

import * as React from "react";
import { Component } from "react";
import * as ReactDOM from "react-dom";

import { hello } from "./hello";
import { add } from "./add";

import "../scss/main.scss";

class HelloMessage extends Component {
    render() {
        let x: string = "typescript!";
        return (
            <div>
                Hi, from React {add(2, 3)} and {x}
            </div>
        );
    }
}

let mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage />, mountNode);

let val: number = 123;
val = 1;
console.log("Hello World!" + val);

console.log(hello());
console.log(add(1, 2));
