import React, { Component, PropTypes } from 'react';

class Main extends Component {
  render() {
    const { auth, children } = this.props;

    return (
      <div id="main">
        {children}
      </div>
    );
  }
}

Main.propTypes = {
  auth: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export default Main;
