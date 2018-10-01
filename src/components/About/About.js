import React, { Component } from 'react';
import './About.css';
import Me from './me.png';

const About = () => {
	return (
		<div className="about-container">

				<section className="about-content">
					<img src={Me} alt="Robert Hancock" className="me"/>
					<p className="about-p1"> 
						I'm an Arizona native, support professional, and front end developer as well as an avid reader and researcher with a million and one questions.  My philosophy, politics, and behavioral science enthusiast, and dog person. 
					</p>
					<p className="about-p2">
						I've explored many technologies and careers, all of which I find fascinating, but front end development has consistently stood out to me as an ideal match for my skills and interests that also combines the satisfaction of solving difficult technical and logical problems, the fulfillment of working to accomplish something as part of a larger team, and the acheivement of creating something that provides value to others.
					</p>
					<p className="about-p3">
						I'm especially interested in the intersection of technology, pyschology, and politics and how they can be used to help humans live longer, more fulfilling, and more efficient lives.
					</p>
					<p className="read-more">Read More </p>
				</section>

		</div>
	)
}

export default About;