import React, { Component } from 'react';
import Sidebar from './components/sidebar.jsx';
import Header from './components/header.jsx';
import Welcome from './components/welcome.jsx';
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
        <Header />
        <main className="main-content">
          <Welcome />
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
