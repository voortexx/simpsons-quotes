import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lamp from "./Lamp";

import Quotes from "./Quotes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: false
    };
  }

  handleClick = () => {
    this.setState({ working: !this.state.working });
  };

  render() {
    const working = this.state.working ? "slow" : "App-logo";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={working} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <div>
          <button
            onClick={this.handleClick}
          >
          Working?
          </button>
        </div>
        <Lamp on />
        <Lamp />
        <Quotes />
      </div>
    );
  }
}

export default App;