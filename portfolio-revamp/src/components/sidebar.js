import React from 'react';
import Headshot from '../alex_pic.png';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <nav>
        <ul>
          <li>
            <img className="headshot" src={Headshot} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
