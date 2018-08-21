import React from 'react';
import LouisGif from '../LK_gif.gif';
import CWSImage from '../CWS.png';
import FortyNinetySixImage from '../4096.png';
import DOMinosImage from '../DOMinos_picture.png';

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <div className="projects">
        <a name="projects"><h1>Projects</h1></a>

        <div className="project-wrapper">
          <div id="one" className="project">
            <img className="project-image" src={LouisGif} />
            <div className="project-info">
              <div className="project-info-content">
                <h2><a href="https://www.louiskornfeld.com">www.LouisKornfeld.com</a></h2>
                <section>
                  LouisKornfeld.com is an actor's portfolio website created using
                  React.js. It makes use of CSS media queries and flexbox to create
                  a seamless and responsive user experience that looks great on mobile.
                </section>
                <div className="project-buttons">
                  <a className="button live-button" href="https://www.louiskornfeld.com">Live</a>
                  <a className="button repo-button" href="https://www.github.com/akorn3001/louis_site">Repo</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-wrapper">
          <div id="two" className="project">
            <div className="project-info">
              <div className="project-info-content">
                <h2><a href="http://coffee-with-strangers.herokuapp.com">Coffee With Strangers</a></h2>
                <section>
                  Coffee With Strangers is a fullstack web application allowing
                  users to join and create meetups in their area. It was made
                  using Ruby on Rails as a backend framework, with React and Redux
                  for the frontend.
                </section>
                <div className="project-buttons">
                  <a className="button live-button" href="http://coffee-with-strangers.herokuapp.com/">Live</a>
                  <a className="button repo-button" href="https://www.github.com/akorn3001/CoffeeWithStrangers">Repo</a>
                </div>
              </div>
            </div>
            <img className="project-image" src={CWSImage} />
          </div>
        </div>

        <div className="project-wrapper">
          <div id="three" className="project">
            <img className="project-image" src={FortyNinetySixImage} />
            <div className="project-info">
              <div className="project-info-content">
                <h2><a href="http://alex-kornfeld.com/4096/">4096</a></h2>
                <section>
                  4096 is a clone of the sliding-block puzzle game, 2048. It was
                  built using vanilla JavaScript and jQuery.
                </section>
                <div className="project-buttons">
                  <a className="button live-button" href="http://alex-kornfeld.com/4096/">Live</a>
                  <a className="button repo-button" href="https://www.github.com/akorn3001/4096">Repo</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="last-project-wrapper" className="project-wrapper">
          <div id="four" className="project">
            <div className="project-info">
              <div className="project-info-content">
                <h2>DOMinos</h2>
                <section>
                  DOMinos is a JavaScript library inspired by jQuery. It provides
                  DOM manipulation functionality.
                </section>
                <div className="project-buttons">
                  <a className="button live-button" href="http://alex-kornfeld.com/DOMinos/">Live Demo</a>
                  <a className="button repo-button" href="https://www.github.com/akorn3001/DOMinos">Repo</a>
                </div>
              </div>
            </div>
            <img className="project-image" src={DOMinosImage} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
