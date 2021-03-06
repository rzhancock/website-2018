import React from "react";
import "./Mern.css";
import main_png from "./shoppinglistmain.PNG";
import add_png from "./shoppinglistadd.PNG";

function Mern() {
  return (
    <div className="mern-wrapper">
      <h4 className="mern-title">MERN Stack Shopping List</h4>
      <p className="mern-description">
        A simple peristent shopping list created as part of the
        <a href="https://www.youtube.com/playlist?list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE">
          {" "}
          LEARN the MERN Stack{" "}
        </a>
        series by{" "}
        <a href="http://www.traversymedia.com/#about"> Brad Traversy</a>. This
        project utilizes the Express API with a MongoDB database hosted by mLab
        for the backend with React, Redux, Bootstrap 4, and the
        react-transition-group Node module on the front end.
      </p>
      <p className="mern-demo">
        <a
          href="http://mern.roberthancock.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>{" "}
        | <a href="https://github.com/rzhancock/mern_tutorial">GitHub</a>
      </p>

      <div className="mern-images">
        <img
          src={main_png}
          alt="Shopping List Main Page"
          className="main-png"
        />
        <img src={add_png} alt="Shopping List Add Modal" className="add-png" />
      </div>
    </div>
  );
}

export default Mern;
