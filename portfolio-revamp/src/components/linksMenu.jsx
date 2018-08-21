import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LinksMenu extends Component {
  constructor(props) {
    super(props);

    this.state = { linkColor : "#444444" };

    this.updateLinkColor = this.updateLinkColor.bind(this);
  }

  componentWillMount() {
    this.updateLinkColor();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateLinkColor);
  }

  componendDidUnmount() {
    window.removeEventListener("resize", this.updateLinkColor);
  }

  updateLinkColor() {
    this.setState({ linkColor: (window.innerWidth < 601 ? "white" : "#444444" )});
  }

  render() {

    const skillsLink =
    <a className="menuitems"
      activeClassName="active-link"
      activeStyle={{ color: this.state.linkColor }}
      href="#skills">Skills
    </a>;

    const projectsLink =
    <a className="menuitems"
      activeClassName="active-link"
      activeStyle={{ color: this.state.linkColor }}
      to="#projects">Projects
    </a>;

    const resumeLink =
    <a className="menuitems"
      activeClassName="active-link"
      to="#resume">Resume
    </a>;

    const aboutLink =
    <a className="menuitems"
      activeClassName="active-link"
      activeStyle={{ color: this.state.linkColor }}
      to="#about">About Me
    </a>;

    const contactLink =
    <a className="menuitems"
      activeClassName="active-link"
      activeStyle={{ color: this.state.linkColor }}
      to="#contact">Contact
    </a>;

    return (
      <ul onClick={this.props.closeNav} className="menulist">
        <li>{skillsLink}</li>
        <li>{projectsLink}</li>
        <li>{resumeLink}</li>
        <li>{aboutLink}</li>
        <li>{contactLink}</li>
      </ul>
    );
  }
}

export default withRouter(LinksMenu);
