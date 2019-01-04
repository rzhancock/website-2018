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

  constructor(props) {
  super(props);

  this.skills = React.createRef();
  this.projects = React.createRef();
  this.resume = React.createRef();
  this.contact = React.createRef();
  }
  

  render() {
    console.log(this.skills);
    return (
      <div className="container">
        <Nav />
        <About />
        <Skills ref={this.skills} />
        <Projects ref={this.projects}  />
        <Resume ref={this.resume} />
        <Contact ref={this.contact}/>
        <Footer />
      </div>
    )
  }
}

export default App;
