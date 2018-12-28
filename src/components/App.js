import React, { Component } from 'react';
import About from './About/About.js';
import Skills from './Skills/Skills.js';
import Projects from './Projects/Projects.js';
import Resume from './Resume/Resume.js';
import Contact from './Contact/Contact.js';
import Footer from './Footer/Footer.js';
import './App.css';
import './Nav.css';


class App extends Component {

  constructor(props) {
    super(props);
    
    this.skills = React.createRef();
    this.projects = React.createRef();
    this.resume = React.createRef();
    this.contact = React.createRef();
    
    this.scrollToSection = this.scrollToSection.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  scrollToSection(section) {
    switch(section) {
      case this.skills:
        this.skills.current.scrollIntoView({behavior: 'smooth'});
        break;
      case this.projects:
        this.projects.scrollIntoView({behavior: 'smooth'});
        break;
      case this.resume:
        this.resume.scrollIntoView({behavior: 'smooth'});
        break;
      case this.contact:
        this.section.scrollIntoView(this.contact, {behavior: 'smooth'});
    }
  }

  handleClick(e){
    e.preventDefault;
    this.scrollToSection(e.ref);
  }

  render() {
    return (
      <div className="container">
        <header className="header">
					<div className="name-wrapper">
						
						<h1><a className="name" href="#">Robert Hancock</a></h1>
					</div>
					<nav>
			     	  <ul className="main-nav">
			     	  	<li onClick={() => {this.handleClick(this.skills)}}>Skills</li>
				        <li onClick={() => {this.scrollToSection(this.projects)}}>Projects</li>
								<li onClick={() => {this.scrollToSection(this.resume)}}>Resume</li>
								<li onClick={() => {this.scrollToSection(this.contact)}}>Contact</li>
			      	</ul>
					</nav>
			  </header>
        <About />
        <Skills name="skills" ref={this.skills}/>
        <Projects name="projects" ref={this.projects} />
        <Resume name="resume" ref={this.resume} />
        <Contact name="contact" ref={this.contact} />
        <Footer />
      </div>
    )
  }
}

export default App;
