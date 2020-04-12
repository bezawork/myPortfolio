import React from "react";
import Board from "./Board";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Board size={10} />
      </React.Fragment>
    );
  }
}

export default App;
