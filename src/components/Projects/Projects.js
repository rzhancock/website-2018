import React from 'react';
import Battle from './Battle/Battle.js';
import Mern from './Mern/Mern.js';
import StoneWillow from './StoneWillow/StoneWillow.js';

import './Projects.css';


const Projects = React.forwardRef((props, ref) => (

    	<section className="projects-container" ref={ref}>
    			<div className="projects-header">
						<h3>
							Projects and Tutorials
						</h3>
					</div>
				<Battle />
				<Mern />
				<StoneWillow />
		</section>

 ))

export default Projects;