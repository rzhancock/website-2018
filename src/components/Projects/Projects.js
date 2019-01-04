import React from 'react';
import Battle from './Battle/Battle.js';
import Mern from './Mern/Mern.js';
import StoneWillow from './StoneWillow/StoneWillow.js';

import './Projects.css';


const Projects = () => {


    return (
    	<section className="projects-container">
    			<div className="projects-header">
						<h3>
							Projects and Tutorials
						</h3>
					</div>
				<Battle />
				<Mern />
				<StoneWillow />
		</section>
    );
  }

export default Projects;