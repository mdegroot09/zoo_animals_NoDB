import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Animals from './components/Animals'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Our Zoo Animals!</h1>
        </header>
        <Animals/>
      </div>
    );
  }
}

export default App;
