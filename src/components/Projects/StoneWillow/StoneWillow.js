import React from 'react';

import './StoneWillow.css';
import stonewillow_jpg from './stonewillow.jpg';
import before_jpg from './stonewillowbefore.jpg';

function StoneWillow() {
    return ( 
          <div className="stonewillow-wrapper">
            <h4 className="stonewillow-title">Stone-Willow.com Community Website</h4>
            <p className="stonewillow-description">
               A quick website I created for my grandma after she asked me to make some small changes to her gated community's SquareSpace website. Once I saw the existing site I had no choice but to upgrade it to a more professional and aesthetically pleasing template.
            </p>
            <p className="stonewillow-demo">
            <a href="https://stone-willow.com" target="_blank">Go to Site</a> | <a href ="https://github.com/rzhancock/StoneWillow_website">GitHub</a>
            </p>
            
            <div className="stonewillow-images">
              <img src={before_jpg} alt="StoneWillow Before" className="before-jpg" />
              <img src={stonewillow_jpg} alt="StoneWillow After" className="stonewillow-jpg" />
            </div>
          </div>

    )
}

export default StoneWillow;