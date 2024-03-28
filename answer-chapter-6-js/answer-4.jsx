import React from "react";

const App = () => {
  function eventHandler() {
    alert("Apa mau dibikin?");
  }

  return (
    <div className="App">
      <h1>Hallo Hallo</h1>
      <button onClick={eventHandler}>Click!</button>
    </div>
  );
};

export default App;
