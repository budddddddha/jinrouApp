import React, { Component, PropTypes } from 'react';

class Main extends Component {
  render() {
    const { children } = this.props;

    return (
      <div id="main">
        {children}
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.object.isRequired
};

export default Main;
