import React from 'react';
import './Mern.css';


function Mern() {
    return ( 
          <div className="mern-wrapper">
            <h4 className="mern-title">MERN Stack Shopping List</h4>
            <p className="mern-description">
              A simple peristent shopping list created as part of the<a href="https://www.youtube.com/playlist?list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE"> LEARN the MERN Stack </a>series by <a href="http://www.traversymedia.com/#about"> Brad Traversy</a>. This project utilizes the Express API with a MongoDB database hosted by mLab for the backend with React, Redux, Bootstrap 4, and the React Transition Group module on the front end. 
            </p>
            <a href="http://mern.roberthancock.net" target="_blank" className="demo">View Live Demo</a>
            <div className="mern-images">
            </div>
          </div>

    )
}

export default Mern;