import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Detalhes from "./components/pages/detalhes";

class App extends Component {
  render() {
    var pessoa = {
      nome: "charles",
      idade: 29
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bem vindo</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Detalhes pessoa={pessoa} />
      </div>
    );
  }
}

export default App;
