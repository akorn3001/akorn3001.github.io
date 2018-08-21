import React from 'react';
import Headshot from '../alex_pic.png';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="inner">
        <nav>
          <ul>
            <li>
              <img className="headshot" alt="" src={Headshot} />
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="/portfolio-revamp/public/resume.pdf">Resume</a>
            </li>

            <li>
              <a href="#about-me">About Me</a>
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
