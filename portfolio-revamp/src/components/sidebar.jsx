import React from 'react';
import Headshot from '../alex_pic.png';

const Sidebar = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div id="sidebar">
      <div className="inner">
        <nav>
          <ul>
            <li>
              <img className="headshot nav-link" onClick={scrollToTop.bind(this)} alt="" src={Headshot} />
            </li>

            <li className="nav-link">
              <a href="#skills">Skills</a>
            </li>

            <li className="nav-link">
              <a href="#projects">Projects</a>
            </li>

            <li className="nav-link">
              <a href="/portfolio-revamp/public/resume.pdf">Resume</a>
            </li>

            <li className="nav-link">
              <a href="#about-me">About Me</a>
            </li>

            <li className="nav-link">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  );
};

export default Sidebar;
