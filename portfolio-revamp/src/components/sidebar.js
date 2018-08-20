import React from 'react';
import Headshot from '../alex_pic.png';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="inner">
        <nav>
          <ul>
            <li>
              <img className="headshot" src={Headshot} />
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#resume">Resume</a>
            </li>

            <li>
              <a href="#education">Education</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  );
};

export default Sidebar;
