import React from 'react';
import './About.css';
import Me from './me.png';

const About = () => {
	return (
		<div className="about-container">

				<section className="about-content">
					<img src={Me} alt="Robert Hancock" className="me"/>
					<p className="about-p1"> 
						I'm an experienced support professional and self-taught front end developer as well as an avid reader and researcher. I believe that no question is too stupid to Google and any day spent without learning something new is a day wasted. 
					</p>
				</section>

		</div>
	)
}

export default About;