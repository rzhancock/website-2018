import React from 'react';
import './Skills.css';

const Skills = React.forwardRef((props, ref) => (

			<section className="skills-container" ref={skills}>

							<div className="skills-header">
								<h3>
									Skills
								</h3>
							</div>

							<ul className="skills-list">
								<li>
									HTML5
								</li>
								<li>
									CSS3
								</li>
								<li>
									Bootstrap
								</li>
								<li>
									WordPress
								</li>
								<li>
									Javascript
								</li>
								<li>
									jQuery
								</li>
								<li>
									React.js
								</li>
								<li>
									Node/NPM
								</li>
								<li>
									Linux/LAMP
								</li>
								<li>
									Git/Github
								</li>
							</ul>

						
			</section>
		)
);

export default Skills;