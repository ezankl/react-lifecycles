import React, { Component } from "react";
import "./App.css";

import Timer from "./Timer";

class App extends Component {
  state = {
    time: 0,
    show: true
  };

  getClickHandler() {
    return () => {
      this.setState({ time: Math.floor(Math.random() * 10) });
    };
  }

  getToogleShowHandler() {
    return () => this.setState(state => ({ ...state, show: !state.show }));
  }

  render() {
    return (
      <div className="App">
        {this.state.show && <Timer time={this.state.time} />}
        <button onClick={this.getClickHandler()}>set</button>
        <button onClick={this.getToogleShowHandler()}>toogle</button>
      </div>
    );
  }
}

export default App;
