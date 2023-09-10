import React from "react";
import ReactDOM from "react-dom";

const name = "Phuoc Huynh";
const num = 24;

ReactDOM.render(
    <div>
      <h1>Hello {name}, I am {num} years old.</h1>
      <p>My lucky number is {6+3}.</p>
      <button>Click me</button>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    </div>,
document.getElementById("root")
);