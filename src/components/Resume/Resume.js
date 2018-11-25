import React, { Component } from 'react';
import { FaDownload } from 'react-icons/fa';

import resume from './Robert_Hancock.pdf';
import './Resume.css';


function Resume() {
  return (
  	<section className="resume-container">

          <div className="resume-header">
          <a  href={resume} target="_blank" alt="Download Resume" >
              <h3>
                Resume <span className="download-resume"><FaDownload /></span>
              </h3>
          </a>  
              
					</div>
            <div className="resume-items">
              <div className="resume-item">
                <a href="https://www.omnis.com"><h5>Omnis Network</h5></a>
                <p>2013 - Present</p>
                <p>Technical Support</p>
              </div>

              <div className="resume-item">
              <a><h5>Direct Marketing Media</h5></a>
                <p>2012 - 2013</p>
                <p>Supervisor, Customer Retention</p>
              </div>

              <div className="resume-item">
              <a href="https://www.godaddy.com"><h5>GoDaddy.com</h5></a>
                <p>2009 - 2012</p>
                <p>Technical Support</p>
              </div>
              </div>
		</section>
  );
}

export default Resume;