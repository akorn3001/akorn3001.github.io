import React from 'react';
import AWS_icon from '../devicons/aws-icon.svg';
import Atom_icon from '../devicons/atom-icon.svg';
import CSS3_icon from '../devicons/css3-icon.svg';
import Django_icon from '../devicons/django-icon.svg';
import Git_icon from '../devicons/git-icon.svg';
import Github_icon from '../devicons/github-icon.svg';
import Heroku_icon from '../devicons/heroku-icon.svg';
import HTML5_icon from '../devicons/html5-icon.svg';
import JavaScript_icon from '../devicons/javascript-icon.svg';
import JQuery_icon from '../devicons/jquery-icon.svg';
import NPM_icon from '../devicons/npm-icon.svg';
import PostgreSQL_icon from '../devicons/postgresql-icon.svg';
import Python_icon from '../devicons/python-icon.svg';
import Rails_icon from '../devicons/rails-icon.svg';
import React_icon from '../devicons/react-icon.svg';
import Redux_icon from '../devicons/redux-icon.png';
import Ruby_icon from '../devicons/ruby-icon.svg';

const Skills = () => {
  return (
    <div className="skills-wrapper">
      <h1 id="skills">Skills</h1>
      <div className="skills">
        <img className="devicon" alt="skill-icon" src={AWS_icon} />
        <img className="devicon" alt="skill-icon" src={Atom_icon} />
        <img className="devicon" alt="skill-icon" src={CSS3_icon} />
        <img className="devicon" alt="skill-icon" src={Django_icon} />
        <img className="devicon" alt="skill-icon" src={Git_icon} />
        <img className="devicon" alt="skill-icon" src={Github_icon} />
        <img className="devicon" alt="skill-icon" src={Heroku_icon} />
        <img className="devicon" alt="skill-icon" src={HTML5_icon} />
        <img className="devicon" alt="skill-icon" src={JavaScript_icon} />
        <img className="devicon" alt="skill-icon" src={JQuery_icon} />
        <img className="devicon" alt="skill-icon" src={NPM_icon} />
        <img className="devicon" alt="skill-icon" src={PostgreSQL_icon} />
        <img className="devicon" alt="skill-icon" src={Python_icon} />
        <img className="devicon" alt="skill-icon" src={Rails_icon} />
        <img className="devicon" alt="skill-icon" src={React_icon} />
        <img className="devicon" alt="skill-icon" src={Redux_icon} />
        <img className="devicon" alt="skill-icon" src={Ruby_icon} />
      </div>
    </div>
  );
};

export default Skills;
