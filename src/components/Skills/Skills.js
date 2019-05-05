import React from "react";
import "./Skills.css";
import fcc from "./freecodecamp.png";

const Skills = React.forwardRef((props, ref) => (
  <section className="skills-container" ref={ref}>
    <div className="skills-header">
      <h3>Skills</h3>
    </div>

    <ul className="skills-list">
      <li>HTML5</li>
      <li>CSS3</li>
      <li>Javascript</li>
      <li>React.js</li>
      <li>Bootstrap</li>
      <li>WordPress</li>
      <li>jQuery</li>
      <li>Node/NPM</li>
      <li>Linux/LAMP</li>
      <li>Git/Github</li>
    </ul>

    <div className="skills-header">
      <div className="certs">
        <a
          href="https://freecodecamp.org/rzhancock"
          id="fcc-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fcc} className="fcc" alt={"Free Code Camp dot org logo"} />{" "}
          Certifications:
        </a>
        <a
          href="https://www.freecodecamp.org/certification/rzhancock/javascript-algorithms-and-data-structures"
          target="_blank"
          rel="noopener noreferrer"
        >
          Javascript Algorithms and Data Structures
        </a>
        <a
          href="https://www.freecodecamp.org/certification/rzhancock/responsive-web-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          Responsive Web Design
        </a>
        <p />
      </div>
    </div>
  </section>
));

export default Skills;
