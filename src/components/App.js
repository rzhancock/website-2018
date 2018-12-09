import React, { Component } from 'react';
import Nav from './Nav/Nav.js';
import About from './About/About.js';
import Skills from './Skills/Skills.js';
import Projects from './Projects/Projects.js';
import Resume from './Resume/Resume.js';
import Contact from './Contact/Contact.js';
import Footer from './Footer/Footer.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;
