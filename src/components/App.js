import React, { Component } from 'react';
import Nav from './Nav/Nav.js';
import About from './About/About.js';
import Skills from './Skills/Skills.js';
import Projects from './Projects/Projects.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <About />
        <Skills />
        <Projects />
      </div>
    )
  }
}

export default App;
