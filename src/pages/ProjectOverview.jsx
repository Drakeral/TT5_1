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
import NavBar from '../components/NavBar';

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

  // const projectInfo = async () => {
  //   await axios.get(`/project-get`, {}, {
  //     params: {
  //       id: props.id,
  //       name: props.name,
  //       description: props.description,
  //     }
  //   })
  //     .then(res => {
  //       setExp(res.data)
  //       console.log("success")
  //     })
  //     .catch(error => {
  //       setError(true)
  //       console.log(error)
  //     })
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
        <NavBar>
        <div>
          <div>{projects}</div>
        </div>
        </NavBar>
      );
    }




    // const submitHandler = (event: any) => {
    //   event.preventDefault();
    //   axios.post(back_url, body, {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }
    //   ).then(res => {
    //     history.replace('/');
    //   })
    // }

  }
  
  export default ProjectOverview;
  