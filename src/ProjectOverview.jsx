import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class ProjectOverview extends Component {
    constructor(props) {
      super(props);
  
      this.state = {};
    }

    render() {
      const projects = this.props.projects.map((projectInfo) => {
        return (
          <div key={projectInfo.id} className="col-12 col-md-5 m-1">
          <Card>
              <CardTitle> Project Name: {projectInfo.name} </CardTitle>
              <CardBody>Project Description: {projectInfo.description}</CardBody>
              <Button variant="primary">Details</Button>
          </Card>
        </div>
        );
      });

      return (
        //return the view for this component
        //able to make use of javascript variables in jsx
        <div>
          <h1>Project Overview</h1>
          <div>{projects}</div>
        </div>
      );
    }
  }
  
export default ProjectOverview;
  