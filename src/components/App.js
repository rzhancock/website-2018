import React, { Component } from 'react';

import Nav from './Nav/Nav.js';
import About from './About/About.js';
import Skills from './Skills/Skills.js';
import Projects from './Projects/Projects.js';
import Resume from './Resume/Resume.js';
import Contact from './Contact/Contact.js';
import Footer from './Footer/Footer.js';
import './App.css';
import { FaArrowUp } from 'react-icons/fa';


class App extends Component {

  constructor(props) {
  super(props);

  this.skills = React.createRef();
  this.projects = React.createRef();
  this.resume = React.createRef();
  this.contact = React.createRef();
  }

  onNavClick = link => () => {

    const top = this[link].current.offsetTop;
    window.scrollTo({
      top,
      left: 0,
      behavior: 'smooth'
  })
}

  backToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    console.log(this.skills);
    return (
      <div className="container">
        <Nav onClick={this.onNavClick} />
        <About />
        <Skills ref={this.skills} />
        <Projects ref={this.projects}  />
        <Resume ref={this.resume} />
        <Contact ref={this.contact}/>
        
        <div className="button-top-container">
          <button className="button-top" onClick={this.backToTop}>
            <FaArrowUp className="FaArrow"/>
            Back to Top
            
          </button>
        </div>

        <Footer onClick={this.backToTop}/>
      </div>
    )
  }
}

export default App;
