import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleScrollToTop = this.handleScrollToTop.bind(this);
  }

  handleScrollToTop() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <div>
        <header>
          <span onClick={this.handleScrollToTop}>Alex Kornfeld</span>
        </header>

      </div>
    );
  }
}

export default Header;
