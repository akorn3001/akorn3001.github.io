import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Sidebar from './components/sidebar.jsx';
import Skills from './components/skills.jsx';
import Projects from './components/projects.jsx';
import AboutMe from './components/about.jsx';
import Contact from './components/contact.jsx';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <main className="main-content">
          <Skills />
          <Projects />
          <AboutMe />
          <Contact />
        </main>
      </div>
    );
  }
}

export default App;
