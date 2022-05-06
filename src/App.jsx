import React from 'react';
import { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { project } from "./constants/project.js";
import ProjectOverview from "./pages/ProjectOverview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: project,
    };
  }
    render() {
      return (
      <div className="App">
        <ProjectOverview projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
