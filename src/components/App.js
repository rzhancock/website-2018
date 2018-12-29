import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

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
			     	  	<li>
                   <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                   > 
                    Skills
                   </Link>
                </li>
				        <li>Projects</li>
								<li>Resume</li>
								<li>Contact</li>
			      	</ul>
					</nav>
			  </header>
        <About />
        <Skills id="skills" />
        <Projects id="projects"  />
        <Resume id="resume" />
        <Contact id="contact" />
        <Footer />
      </div>
    )
  }
}

export default App;
