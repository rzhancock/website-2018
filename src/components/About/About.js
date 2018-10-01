import React, { Component } from 'react';
import './About.css';

const About = () => {
	return (
		<div className="about-container">
			<div className="about">
				<section className="about-content">
					<h2>About Me</h2>

					<p> 
						I'm an Arizona native forged in the relentless heat of the Valley of the Sun, a consummate support professional going on front end developer, an avid reader and researcher, philosophy and behavioral science enthusiast, and dog person. 
					</p>
					<p>
						I've explored many technologies and careers, all of which I find fascinating, but front end development has consistently stood out to me as an ideal match for my skills and interests that also combines the satisfaction of solving difficult technical and logical problems, the fulfillment of working to accomplish something as part of a larger team, and the acheivement of creating something that provides value to others.
					</p>
					<p>
						I'm especially interested in the intersection of technology, pyschology, and politics and how they can be used to help humans live longer, more fulfilling, and more efficient lives.
					</p>
				</section>
			</div>
		</div>
	)
}

export default About;