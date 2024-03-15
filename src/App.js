import React, { useState } from "react";
import "./App.css";

function App() {
  let [counter, AnyName] = useState(15);

  const addValue = () => {
    console.log("clicked", counter);

    AnyName(counter + 1);
  };

  const removeValue = () => {
    console.log("clicked", counter);

    AnyName(counter - 1);
  };

  return (
    <div className="App">
      <h1>Practice Hooks</h1>
      <h2>Counter value : {counter}</h2>

      <button className="btn" onClick={addValue}>
        Add value
      </button>
      <br />

      <button className="btn" onClick={removeValue}>
        Remove value
      </button>
    </div>
  );
}

export default App;
