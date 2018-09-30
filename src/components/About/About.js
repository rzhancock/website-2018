import React, { Component } from 'react';
import './About.css';
import Me from './me.png';

const About = () => {
	return (
		<div className="about-container">
		<div className="about">
			<div id="photo">
				<img src={Me} alt="Robert Hancock" id="me"/>
			</div>
			<div id="about-content">
				<p>
					Hello World
				</p>
			</div>
		</div>
		</div>
	)
}

export default About;