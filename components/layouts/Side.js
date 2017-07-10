/**
 * <コンポーネント>
 * サイド
 */

import React, { Component, PropTypes } from 'react';

class Side extends Component {
  render() {
    return (
      <div id="side">
        <ul>
          <li>
            <img src="/dist/static/wolf.svg" />
          </li>
        </ul>
      </div>
    );
  }
}

Side.propTypes = {
};

export default Side;
