import { useInsertionEffect, useState } from "react";
import "./app.css";
import TextSpan from "./TextSpan";

function App() {
  const sentence = "Hello World".split("");

  return (
    <div className="App">
      {sentence.map((letter, index) => {
        return (
          <TextSpan key={index}>{letter === "" ? "\u00A0" : letter}</TextSpan>
        );
      })}
    </div>
  );
}

export default App;
