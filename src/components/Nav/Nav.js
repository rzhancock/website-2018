import React from 'react';
import './Nav.css';


const Nav = ({ onClick }) => {


		return (
			<header className="header">
					<div className="name-wrapper">

						<h1><a className="name" href="#">Robert Hancock</a></h1>
					</div>
					<nav>
			     	  <ul className="main-nav">
			     	  	<li onClick={onClick('skills')}>Skills</li>
				        <li onClick={onClick('projects')}>Projects</li>
								<li onClick={onClick('resume')}>Resume</li>
								<li onClick={onClick('contact')}>Contact</li>
			      	</ul>
					</nav>
			</header>
		)
		};

	export default Nav;
