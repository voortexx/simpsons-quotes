import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lamp from "./Lamp";
import NameForm from "./NameForm";
import GenerateQuote from "./GenerateQuote";
import DisplayQuote from "./DisplayQuote";

import Quotes from "./Quotes";
const sampleQuote = {
  quote:
    "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
  character: "Homer Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: false,
      quote: sampleQuote
    };
  }

  handleClick = () => {
    this.setState({ working: !this.state.working });
  };

  getQuote() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          quote: data[0]
        });
      });
  }

  render() {
    const working = this.state.working ? "slow" : "App-logo";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={working} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <div>
          <button onClick={this.handleClick}>Working?</button>
        </div>
        <NameForm />
        <Lamp on />
        <Lamp />
        <GenerateQuote selectQuote={() => this.getQuote()} />
        <DisplayQuote quote={this.state.quote} />
      </div>
    );
  }
}

export default App;
