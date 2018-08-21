import React from 'react';

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let liveButtonText = this.props.liveButtonText || "Live";
    let projectComponent;

    if (this.props.leftImage) {
      projectComponent =
      <div className={`project-wrapper ${this.props.addedClassName}`}>
        <h2>{this.props.projectTitle}</h2>
        <div className="project">
          <div className="project-image-wrapper">
            <img className="project-image" src={this.props.imageSrc} />
          </div>
          <div className="project-info-wrapper">
            <section className="project-info">
              {this.props.projectSummary}
            </section>
            <div className="project-buttons">
              <a className="button live-button" href={this.props.liveHREF}>{liveButtonText}</a>
              <a className="button repo-button" href={this.props.repoHREF}>Repo</a>
            </div>
          </div>
        </div>
      </div>;
    } else {
      projectComponent =
      <div className={`project-wrapper ${this.props.addedClassName}`}>
        <h2>{this.props.projectTitle}</h2>
        <div className="project">
          <div className="project-info-wrapper">
            <section className="project-info">
              {this.props.projectSummary}
            </section>
            <div className="project-buttons">
              <a className="button live-button" href={this.props.liveHREF}>{liveButtonText}</a>
              <a className="button repo-button" href={this.props.repoHREF}>Repo</a>
            </div>
          </div>
          <div className="project-image-wrapper">
            <img className="project-image" src={this.props.imageSrc} />
          </div>
        </div>
      </div>;
    }
    return projectComponent;
  }
}

export default Project;
