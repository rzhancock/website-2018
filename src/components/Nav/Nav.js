import React, { Component } from 'react';
import './Nav.css';
import logo from './logo.png';

function Nav() {
		return ( 
			<header className="header">
					<h1><a className="name" href="#">ROBERT HANCOCK</a></h1>
					<nav>
			     	  <ul className="main-nav">
				        <li><a>Projects</a></li>
						<li><a>History</a></li>
						<li><a>Contact</a></li>
						<li><a id="blog-link">Blog
						<div id="blog-subscript">Coming Soon!</div></a></li>
			      	  </ul>
					</nav>
			</header>
		)
}

export default Nav;