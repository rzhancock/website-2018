import React, { Component } from 'react';
import Nav from './Nav/Nav.js';
import About from './About/About.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <About />
      </div>
    )
  }
}

export default App;