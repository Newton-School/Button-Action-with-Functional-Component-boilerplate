import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  return (
    <div id="main">
      // Do not alter the main div
      <button
        id="click"
        onClick={() =>
          this.setState({
            para:
              "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
          })
        }
      >
        Button
      </button>
      <p id="para">{this.state.para}</p>
    </div>
  );
}

export default App;
