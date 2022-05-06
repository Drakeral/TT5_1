import React from 'react';
import { Component } from "react";
import logo from './logo.svg';
import './App.css';
// import { project } from "./project.js";
import ProjectOverview from "./ProjectOverview";
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    const apiUrl =
        "https://test-1234567533.herokuapp.com/project/";
  
    axios.get(apiUrl)
        .then((response) => {
            this.setState({
                projects: response.data
              })
            })
            .catch((error) => console.log(error))
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
