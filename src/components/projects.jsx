import React from 'react';
import LouisGif from '../LK_gif.gif';
import CWSImage from '../CWS.png';
import FortyNinetySixImage from '../4096.png';
import DOMinosImage from '../DOMinos_picture.png';
import Project from './project.jsx';

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <h1 id="projects">Projects</h1>

      <Project
        id="one"
        leftImage={true}
        projectTitle="Actor's Website"
        imageSrc={LouisGif}
        projectSummary="LouisKornfeld.com is an actor's portfolio website
          created using React.js. It makes use of CSS media queries and flexbox
          to create a seamless and responsive user experience that looks great
          on mobile."
        liveHREF={"https://www.louiskornfeld.com"}
        repoHREF={"https://www.github.com/akorn3001/louis_site"}
      />

      <Project
        id="two"
        leftImage={false}
        imageSrc={CWSImage}
        projectTitle="Coffee With Strangers"
        projectSummary="Coffee With Strangers is a fullstack web application
          allowing users to join and create meetups in their area. It was made
          using Ruby on Rails as a backend framework, with React and Redux for
          the frontend."
        liveHREF={"http://coffee-with-strangers.herokuapp.com/"}
        repoHREF={"https://www.github.com/akorn3001/CoffeeWithStrangers"}
      />

      <Project
        id="three"
        leftImage={true}
        projectTitle="4096"
        imageSrc={FortyNinetySixImage}
        projectSummary="4096 is a clone of the sliding-block puzzle game,
          2048. It was built using vanilla JavaScript and jQuery."
        liveHREF={"http://alex-kornfeld.com/4096/"}
        repoHREF={"https://www.github.com/akorn3001/4096"}
      />

      <Project
        id="four"
        addedClassName="last-project-wrapper"
        leftImage={false}
        projectTitle="DOMinos"
        imageSrc={DOMinosImage}
        projectSummary="DOMinos is a JavaScript library inspired by
          jQuery. It provides DOM manipulation functionality."
        liveHREF={"http://alex-kornfeld.com/DOMinos/"}
        repoHREF={"https://www.github.com/akorn3001/DOMinos"}
      />
    </div>
  );
};

export default Projects;
