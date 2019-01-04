import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelopeSquare, FaFacebook } from 'react-icons/fa';
import './Contact.css';


const Contact = () => {

  return (
  	<section className="contact-container">

          <div className="contact-header">
						<h3>
							Need to get in touch?
						</h3>
					</div>
            <div className="contact-items">

              <a href="mailto:rzhancock@gmail.com" className="contact-buttons">
                <div className="contact-icons"><FaEnvelopeSquare /></div>
                Email
              </a>

              <a href="https://www.facebook.com/zelan.hancock" className="contact-buttons">
                <div className="contact-icons"><FaFacebook /></div>
                Facebook
              </a>

              <a href="https://www.github.com/rzhancock/" className="contact-buttons">
                <div className="contact-icons"><FaGithub /></div>
                GitHub
              </a>

              <a href="https://www.linkedin.com/in/robertzhancock/" className="contact-buttons">
                <div className="contact-icons"><FaLinkedin /></div>
                LinkedIn
              </a>

            </div>
		</section>
  );
}


export default Contact;