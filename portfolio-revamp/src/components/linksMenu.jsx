import React, { Component } from 'react';
import Resume from '../resume.pdf';
import Headshot from '../alex_pic.png';
import { withRouter } from 'react-router-dom';

class LinksMenu extends Component {
  constructor(props) {
    super(props);

    this.state = { linkColor : "#444444" };

    this.updateLinkColor = this.updateLinkColor.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
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

  scrollToTop() {
    window.scrollTo(0, 0);
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
      href="#projects">Projects
    </a>;

    const resumeLink =
    <a className="menuitems"
      activeClassName="active-link"
      target="_blank"
      href={Resume}>Resume
    </a>;

    const aboutLink =
    <a className="menuitems"
      activeClassName="active-link"
      activeStyle={{ color: this.state.linkColor }}
      href="#about-me">About Me
    </a>;

    const contactLink =
    <a className="menuitems"
      activeClassName="active-link"
      activeStyle={{ color: this.state.linkColor }}
      href="#contact">Contact
    </a>;

    return (
      <ul onClick={this.props.closeNav} className="menulist">
        <li>
          <img className="headshot nav-link" onClick={this.scrollToTop} alt="" src={Headshot} />
        </li>
        <li className="nav-link">{skillsLink}</li>
        <li className="nav-link">{projectsLink}</li>
        <li className="nav-link">{resumeLink}</li>
        <li className="nav-link">{aboutLink}</li>
        <li className="nav-link">{contactLink}</li>
      </ul>
    );
  }
}

export default withRouter(LinksMenu);
