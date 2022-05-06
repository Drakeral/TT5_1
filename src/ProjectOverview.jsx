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

class ProjectOverview extends Component {
    constructor(props) {
      super(props);
  
      this.state = {};
    }

  //   componentDidMount() {
  //     fetch('https://some-api.com/harry-potter')
  //     .then((response) => response.json())
  //     .then(booksList => {
  //         this.setState({ books: booksList });
  //     });
  // }

    render() {
      const projects = this.props.projects.map((proj) => {
        return (
          <div key={proj.id} className="col-12 col-md-5 m-1">
          <Card>
              <CardTitle> {proj.name} </CardTitle>
              <CardBody>{proj.description}</CardBody>
              <Button variant="primary">Details</Button>
          </Card>
        </div>
        );
      });
  
      return (
        //return the view for this component
        //able to make use of javascript variables in jsx
        <div>
          <div>{projects}</div>
        </div>
      );
    }
  }
  
  export default ProjectOverview;
  