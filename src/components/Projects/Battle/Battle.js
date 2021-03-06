import React from "react";

import "./Battle.css";
import battle_png from "./Battle.PNG";
import popular_png from "./Popular.PNG";

function Battle() {
  return (
    <div className="battle-wrapper">
      <h4 className="battle-title">
        GitHub Battle + Popular GitHub Repositories
      </h4>
      <p className="battle-description">
        This app was completed as part of the{" "}
        <a
          href="https://tylermcginnis.com/courses/react-fundamentals/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          React Fundamentals{" "}
        </a>{" "}
        course by
        <a
          href="https://twitter.com/tylermcginnis"
          className="tmcginnis"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Tyler McGiniss
        </a>
        . It provided an excellent introduction to React.js, AJAX with Axios,
        Webpack, Babel, React Router v4, and Flexbox.
      </p>
      <p className="battle-demo">
        <a
          href="https://roberthancock.net/github-battle"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>{" "}
        | <a href="https://github.com/rzhancock/github-battle">GitHub</a>
      </p>
      <div className="battle-images">
        <img src={battle_png} alt="GitHub Battle" className="battle-png" />
        <img
          src={popular_png}
          alt="Popular GitHub Repos"
          className="popular-png"
        />
      </div>
    </div>
  );
}

export default Battle;
