import React, { Component } from 'react';
import Battle from './Battle/Battle.js';
import './Projects.css';


export default class extends Component {
  render() {
    return (
    	<section className="projects-container">
    			<div className="projects-header">
					<h3>
						Projects and Tutorials:
					</h3>
				</div>
				<Battle />
		</section>
    );
  }
}