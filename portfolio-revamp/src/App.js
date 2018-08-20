import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Sidebar from './components/sidebar';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <main className="main-content">
          STUFF COMING LATER...
        </main>
      </div>
    );
  }
}

export default App;
