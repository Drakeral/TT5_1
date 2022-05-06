import React, { Component } from "react";


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
          <div key={proj.id}>
            <div style="width: 18rem;">
              <div>
                <h5>{proj.name}</h5>
                <p>{proj.description}</p>
                <a href="#">Detailed View</a>
                </div>
            </div>
          </div>
        );
      });
  
      return (
        //return the view for this component
        //able to make use of javascript variables in jsx
        <div >
          <div >{projects}</div>
        </div>
      );
    }
  }
  
  export default ProjectOverview;
  