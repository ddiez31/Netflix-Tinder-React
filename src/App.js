import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RandomSelect from './components/random_select';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Netflix Tinder with React</h1>
        </header>

          <RandomSelect />

      </div>
    );
  }
}

export default App;
