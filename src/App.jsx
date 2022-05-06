import React from 'react';
import { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { project } from "./pages/project.js";
import ProjectOverview from "./pages/ProjectOverview";
import ProjectIndividual from './pages/ProjectIndividual';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from './pages/LoginPage';


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

        <Router>
        <div>
          
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
          
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/projectindividual">
              <ProjectIndividual />
            </Route>
            <Route path="/projectoverview">
               <ProjectOverview projects={this.state.projects} /> 
            </Route>
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
