import React from "react";
import Battle from "./Battle/Battle.js";
import Mern from "./Mern/Mern.js";
import StoneWillow from "./StoneWillow/StoneWillow.js";

import "./Projects.css";
import QuoteApp from "./Quotes/QuoteApp.js";

const Projects = React.forwardRef((props, ref) => (
  <section className="projects-container" ref={ref}>
    <div className="projects-header">
      <h3>Projects and Tutorials</h3>
    </div>
    <QuoteApp />
    <Battle />
    <Mern />
    <StoneWillow />
  </section>
));

export default Projects;
