import React from 'react';

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let projectComponent;
    if (this.props.leftImage) {
      component =
      <div className="project-wrapper">
        <div className="project-image">
          <img src={this.props.image} />
        </div>
        <div className="project-info">
          <section>{this.props.project_summary}</section>
        </div>
      </div>;
    } else {
      projectComponent =
      <div className="project-wrapper">
        <div className="project-info">
          <section>{this.props.project_summary}</section>
        </div>
        <div className="project-image">
          <img src={this.props.image} />
        </div>
      </div>;
    }
    return projectComponent;
  }
}

export default Project;
