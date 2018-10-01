import React, { Component } from 'react';
import './Nav.css';
import Me from './me.png';


function Nav() {
		return ( 
			<header className="header">
					<div className="name-wrapper">
						<img src={Me} alt="Robert Hancock" className="me"/>
						<h1><a className="name" href="#">ROBERT HANCOCK</a></h1>
					</div>
					<nav>
			     	  <ul className="main-nav">
			     	  	<li><a>Skills</a></li>
				        <li><a>Projects</a></li>
						<li><a>Resume</a></li>
						<li><a>Contact</a></li>
						<li><a>
							<span className="blog-link">Blog</span>
							<span className="blog-subscript">Coming Soon!</span>
							</a>
						</li>
			      	  </ul>
					</nav>
			</header>
		)
}

export default Nav;