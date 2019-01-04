import React from 'react';
import './Nav.css';


const Nav = () => {

			

		return ( 
			<header className="header">
					<div className="name-wrapper">
						
						<h1><a className="name" href="#">Robert Hancock</a></h1>
					</div>
					<nav>
			     	  <ul className="main-nav">
			     	  	<li onClick={() => {this.scroll(this.props.refs.skills.current)}}>Skills</li>
				        <li onClick={() => {this.scroll(this.refs.projects.current)}}>Projects</li>
								<li onClick={() => {this.scroll(this.refs.resume.current)}}>Resume</li>
								<li onClick={() => {this.scroll(this.refs.contact.current)}}>Contact</li>
			      	</ul>
					</nav>
			</header>
		)
		};

	export default Nav;
