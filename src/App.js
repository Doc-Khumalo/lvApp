import React, { Component } from 'react';
import config from './config';
import './App.css';
import HomePage from './components/HomePage/HomePage.container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className='header-wrapper'>{config.header}</h1>
        </header>
        <HomePage />
      </div>
    );
  }
}

export default App;
