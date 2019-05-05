import React from "react";

import "./StoneWillow.css";
import stonewillow_jpg from "./stonewillow.jpg";
import before_jpg from "./stonewillowbefore.jpg";

function StoneWillow() {
  return (
    <div className="stonewillow-wrapper">
      <h4 className="stonewillow-title">Stone-Willow.com Community Website</h4>
      <p className="stonewillow-description">
        My grandma asked for help with some small updates to her gated
        community's website prior to a new advertizing campaign. Once I saw the
        existing site, I decided to update the entire site to a more
        professional template. The images below show the website{" "}
        <strong>before</strong> and <strong>after</strong>.
      </p>
      <p className="stonewillow-demo">
        <a
          href="https://stone-willow.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Site
        </a>{" "}
        | <a href="https://github.com/rzhancock/StoneWillow_website">GitHub</a>
      </p>

      <div className="stonewillow-images">
        <img src={before_jpg} alt="StoneWillow Before" className="before-jpg" />
        <img
          src={stonewillow_jpg}
          alt="StoneWillow After"
          className="stonewillow-jpg"
        />
      </div>
    </div>
  );
}

export default StoneWillow;
