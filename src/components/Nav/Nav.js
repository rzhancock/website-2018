import React, { Component } from 'react';
import './Nav.css';


export default class Nav extends Component {
	constructor(props) {
		super(props);
	}

	scroll = (ref) => {
    this.ref.current.scrollIntoView({behavior: 'smooth'})
  }
		render () {
		return ( 
			<header className="header">
					<div className="name-wrapper">
						
						<h1><a className="name" href="#">Robert Hancock</a></h1>
					</div>
					<nav>
			     	  <ul className="main-nav">
			     	  	<li onClick={() => {this.scroll(this.skillsRef)}}>Skills</li>
				        <li onClick={() => {this.scroll(this.projectsRef)}}>Projects</li>
								<li onClick={() => {this.scroll(this.resumeRef)}}>Resume</li>
								<li onClick={() => {this.scroll(this.contactRef)}}>Contact</li>
			      	</ul>
					</nav>
			</header>
		)
}
}
