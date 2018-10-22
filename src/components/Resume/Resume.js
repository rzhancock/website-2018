import React, { Component } from 'react';

import './Resume.css';


function Resume() {
  return (
  	<section className="resume-container">

          <div className="resume-header">
						<h3>
							Resume
						</h3>
            <a href=
					</div>
            <div className="resume-items">
              <div className="resume-item">
                <h5>Omnis Network</h5>
                <p>2013 - Present</p>
                <p>Technical Support</p>
              </div>

              <div className="resume-item">
                <h5>Direct Marketing Media</h5>
                <p>2012 - 2013</p>
                <p>Supervisor, Customer Retention</p>
              </div>

              <div className="resume-item">
                <h5>GoDaddy.com</h5>
                <p>2009 - 2012</p>
                <p>Technical Support</p>
              </div>
              </div>
		</section>
  );
}

export default Resume;