import React from 'react';
import LouisGif from '../LK_gif.gif';

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <div className="projects">
        <a name="projects"><h1>Projects</h1></a>
        <section id="one" className="project-section">
          <h1><a href="https://www.louiskornfeld.com">www.LouisKornfeld.com</a></h1>
          <img src={LouisGif} />
        </section>
      </div>
    </div>
  );
};

export default Projects;
